"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import type { Post } from "@/lib/types";

export function PostClient({ post }: { post: Post }) {
  const paragraphs = post.content.split("\n");

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Link
        href="/"
        className="inline-flex items-center text-sm text-neutral-400 hover:text-neutral-900 transition-colors mb-16 group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        首页
      </Link>

      <article className="max-w-none">
        <header className="mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-neutral-900 tracking-tight mb-6 font-serif leading-tight">
            {post.title}
          </h1>
          <time className="block text-sm text-neutral-400 font-light tracking-wide">
            {new Date(post.createdAt).toLocaleDateString("zh-CN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </header>

        <div className="text-neutral-700 text-lg leading-loose space-y-6 font-light">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </motion.div>
  );
}
