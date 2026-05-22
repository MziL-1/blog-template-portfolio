import type { Metadata } from "next";
import { getProfile } from "@/lib/api";
import "./globals.css";

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
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white flex flex-col">
        <main className="flex-1 w-full max-w-3xl mx-auto px-6 sm:px-8 py-16 md:py-24 lg:py-32">
          {children}
        </main>
        <footer className="w-full text-center py-8 text-xs text-neutral-400 font-light">
          &copy; {new Date().getFullYear()} {USERNAME}. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
