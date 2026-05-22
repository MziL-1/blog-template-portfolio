import { getProfile, getPosts } from "@/lib/api";
import { HomeClient } from "@/components/HomeClient";

export default async function HomePage() {
  const profile = await getProfile();
  const posts = await getPosts();

  return (
    <HomeClient
      displayName={profile?.displayName || process.env.NEXT_PUBLIC_USERNAME || ""}
      avatarUrl={profile?.avatarUrl || null}
      posts={posts}
    />
  );
}
