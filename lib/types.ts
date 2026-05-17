export interface Profile {
  username: string;
  displayName: string;
  bio: string | null;
  avatarUrl: string | null;
  tags: string[];
}

export interface PostListItem {
  id: string;
  title: string;
  coverImage: string | null;
  createdAt: string;
  tags: string[];
}

export interface Post extends PostListItem {
  content: string;
  user: { username: string };
}
