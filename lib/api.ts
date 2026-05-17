const API_URL = process.env.NEXT_PUBLIC_BLOG_API_URL || "";
const USERNAME = process.env.NEXT_PUBLIC_USERNAME || "";

import type { Profile, PostListItem, Post } from "./types";

async function fetchAPI<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${API_URL}${path}`, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function getProfile(): Promise<Profile | null> {
  return fetchAPI<Profile>(`/api/public/profile/${USERNAME}`);
}

export async function getPosts(): Promise<PostListItem[]> {
  return fetchAPI<PostListItem[]>(`/api/public/posts/${USERNAME}`) ?? [];
}

export async function getPost(postId: string): Promise<Post | null> {
  return fetchAPI<Post>(`/api/public/posts/${USERNAME}/${postId}`);
}
