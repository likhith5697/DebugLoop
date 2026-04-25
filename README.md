# My Tech Blog

A personal blog website built with React and Vite, inspired by Medium but with a unique, classic dark theme. Easily add new posts by dropping markdown files in `src/posts/` and redeploying.

## Features
- Clean, modern, dark-themed UI
- Home page with all blog posts
- Individual post pages
- Easy to add new posts (just add markdown)
- Responsive design
- Dockerized for deployment

## How to Add a New Blog Post
1. Create a new markdown file in `src/posts/` (e.g., `my-new-post.md`).
2. Use the following frontmatter at the top:
	```
	---
	title: "My New Post"
	date: "2026-04-23"
	author: "Your Name"
	readTime: "3 min read"
	---
	```
3. Add your content below the frontmatter.
4. Import and add your post to `src/posts/postsIndex.js`.
5. Redeploy the site (Docker or your preferred method).

## Local Development
```sh
npm install
npm run dev
```

## Build & Deploy with Docker
```sh
docker build -t my-tech-blog .
docker run -p 5173:5173 my-tech-blog
```

---
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
