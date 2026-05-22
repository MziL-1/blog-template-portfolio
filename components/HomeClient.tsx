"use client";

import { motion } from "motion/react";
import Link from "next/link";
import type { PostListItem } from "@/lib/types";

interface HomeClientProps {
  displayName: string;
  avatarUrl: string | null;
  posts: PostListItem[];
}

export function HomeClient({ displayName, avatarUrl, posts }: HomeClientProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center w-full"
    >
      <div className="flex flex-col items-center mb-20">
        <div className="relative mb-6">
          <div className="absolute inset-0 rounded-full blur-md bg-neutral-200/50" />
          <img
            src={
              avatarUrl ||
              "https://images.unsplash.com/photo-1665251117419-31b511ce2be3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcG9ydHJhaXQlMjBib3l8ZW58MXx8fHwxNzc5NDE3MzI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            }
            alt={displayName}
            className="relative w-24 h-24 rounded-full object-cover grayscale border border-neutral-200/50 shadow-sm"
          />
        </div>
        <h1 className="text-3xl font-bold font-serif tracking-tight text-neutral-900">
          {displayName}
        </h1>
      </div>

      <div className="w-full flex flex-col">
        {posts.length === 0 ? (
          <p className="text-center text-neutral-400 text-sm">还没有文章</p>
        ) : (
          posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href={`/${post.id}`}
                className="group block py-6 sm:py-8 border-b border-neutral-100 last:border-none hover:bg-neutral-50/50 transition-colors -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-2xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-6">
                  <h2 className="text-xl sm:text-[1.35rem] font-medium text-neutral-800 group-hover:text-black transition-colors leading-tight font-serif">
                    {post.title}
                  </h2>
                  <time className="text-sm text-neutral-400 font-light tracking-wide whitespace-nowrap">
                    {new Date(post.createdAt).toLocaleDateString("zh-CN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </Link>
            </motion.div>
          ))
        )}
      </div>
    </motion.div>
  );
}
