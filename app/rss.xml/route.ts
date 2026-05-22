import { getProfile, getPosts } from "@/lib/api";

export const dynamic = "force-static";

const BLOG_API_URL = process.env.NEXT_PUBLIC_BLOG_API_URL || "";

export async function GET() {
  const profile = await getProfile();
  const posts = await getPosts();

  const siteUrl = BLOG_API_URL;
  const author = profile?.displayName || process.env.NEXT_PUBLIC_USERNAME || "";

  const items = posts
    .map(
      (post) => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/${post.id}</link>
      <guid>${siteUrl}/${post.id}</guid>
      <pubDate>${new Date(post.createdAt).toUTCString()}</pubDate>
      <description><![CDATA[${post.title}]]></description>
    </item>`
    )
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${author}</title>
    <link>${siteUrl}</link>
    <description>${profile?.bio || ""}</description>
    <language>zh-CN</language>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
