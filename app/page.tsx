import { getProfile, getPosts } from "@/lib/api";

const PROJECTS = [
  {
    name: "项目一",
    description: "在这里展示你的项目，编辑 app/page.tsx 修改内容。",
    url: "#",
  },
  {
    name: "项目二",
    description: "支持添加多个项目卡片，每个项目可以链接到 GitHub 或演示站。",
    url: "#",
  },
];

export default async function HomePage() {
  const profile = await getProfile();
  const posts = await getPosts();

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <header className="mb-16 text-center">
        {profile?.avatarUrl && (
          <img
            src={profile.avatarUrl}
            alt={profile.displayName}
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />
        )}
        <h1 className="font-display text-4xl font-semibold mb-3">
          {profile?.displayName || process.env.NEXT_PUBLIC_USERNAME}
        </h1>
        {profile?.bio && (
          <p className="text-zinc-500 text-base max-w-md mx-auto">{profile.bio}</p>
        )}
        {profile?.tags && profile.tags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {profile.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 bg-zinc-100 text-zinc-600 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {PROJECTS.length > 0 && (
        <section className="mb-16">
          <h2 className="font-display text-2xl font-semibold mb-6">项目</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROJECTS.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 border border-zinc-200 rounded-lg hover:border-zinc-400 hover:shadow-sm transition-all"
              >
                <h3 className="font-medium text-zinc-900 mb-1">{project.name}</h3>
                <p className="text-sm text-zinc-500">{project.description}</p>
              </a>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="font-display text-2xl font-semibold mb-6">文章</h2>
        {posts.length === 0 ? (
          <p className="text-zinc-400">还没有文章</p>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.id}>
                <a href={`/${post.id}`} className="block group">
                  <h3 className="font-display text-xl font-semibold mb-1 group-hover:text-zinc-600 transition-colors">
                    {post.title}
                  </h3>
                  <time className="text-sm text-zinc-400">
                    {new Date(post.createdAt).toLocaleDateString("zh-CN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-1">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-xs text-zinc-400">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </a>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
