import type { Metadata } from "next";
import { getProfile } from "@/lib/api";
import "./globals.css";

const BLOG_API_URL = process.env.NEXT_PUBLIC_BLOG_API_URL || "";
const USERNAME = process.env.NEXT_PUBLIC_USERNAME || "";

export async function generateMetadata(): Promise<Metadata> {
  const profile = await getProfile();
  return {
    title: {
      default: profile?.displayName || USERNAME,
      template: `%s — ${profile?.displayName || USERNAME}`,
    },
    description: profile?.bio || "",
    openGraph: {
      title: profile?.displayName || USERNAME,
      description: profile?.bio || "",
      images: profile?.avatarUrl ? [profile.avatarUrl] : [],
    },
    alternates: {
      types: { "application/rss+xml": `${BLOG_API_URL}/api/public/posts/${USERNAME}` },
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
