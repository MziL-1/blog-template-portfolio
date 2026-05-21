# 开发者作品集模板

一个带项目展示区的作品集风格博客模板。连接 blog-platform 后自动同步你发布的文章。

## 快速部署

### 1. 使用此模板

点击右上角 **Use this template** → **Create a new repository**，把模板复制到你自己的 GitHub 账号下。

### 2. 在 Vercel 部署

1. 注册 [Vercel](https://vercel.com)（推荐用 GitHub 登录）
2. 在 Vercel Dashboard 点击 **Import Project**，选择你刚创建的仓库
3. 配置环境变量：

| 变量名 | 说明 | 示例 |
|--------|------|------|
| `NEXT_PUBLIC_BLOG_API_URL` | 你的 blog-platform 部署地址 | `https://your-platform.vercel.app` |
| `NEXT_PUBLIC_USERNAME` | 你的 blog-platform 用户名 | `your-username` |

4. 点击 **Deploy**

### 3. 设置自动同步

1. 在 Vercel 项目设置 → **Git** → **Deploy Hooks**，创建一个 hook
2. 复制生成的 URL
3. 回到 blog-platform，进入 **部署管理**，粘贴 hook URL
4. 之后在 blog-platform 发布/编辑文章，独立站会自动更新

## 本地开发

```bash
npm install

echo 'NEXT_PUBLIC_BLOG_API_URL=https://your-platform.vercel.app' > .env
echo 'NEXT_PUBLIC_USERNAME=your-username' >> .env

npm run dev
```

打开 http://localhost:3000

## 自定义

- **修改项目列表**：编辑 `app/page.tsx` 里的 `PROJECTS` 数组
- **修改样式**：编辑 `app/globals.css`（Tailwind CSS v4）
- **修改布局**：编辑 `app/layout.tsx`
- **添加页面**：在 `app/` 下创建新文件

## 如何获取模板更新

当官方模板仓库有更新时：

```bash
git remote add upstream https://github.com/MziL-1/blog-template-portfolio.git
git fetch upstream
git merge upstream/main
git push
```

Vercel 会自动检测到你的仓库变更并重新部署。
