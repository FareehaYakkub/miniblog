# Mini Blog with Next.js

A simple and modern blogging application built with **Next.js**. This project demonstrates server-side rendering, dynamic routing, API routes, and local in-memory data handling with mock posts.

## Features

- Server-side rendered homepage with quote and blog posts (`getServerSideProps`)
- getStaticProps,getStaticPath used for blog detail page
- Static + Dynamic blog post support
- Create new blog posts (mocked, stored in-memory)
- API route for fetching post data (`/api/posts`)
- Tailwind CSS for styling
- SEO-optimized with `next/head`
- No database needed (uses in-memory array for dynamic posts)

---

## 🛠️ Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Local state + in-memory JS array for storing posts
- `next/head` for SEO metadata

---

## To create new blog post

- Navigate to /new-post to add a blog post with:
- Title
- Body content
- Image (previewed before submit)
- Note: Posts are stored in an in-memory array and will reset on reload (no database).

## Install Dependencies

npm install

## Run Development Server

npm run dev


