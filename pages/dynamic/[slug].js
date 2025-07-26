import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getDynamicPostBySlug } from '../../lib/dynamicStore';
import { useEffect, useState } from 'react';

export default function DynamicPostDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const [post, setPost] = useState(null);

  useEffect(() => {
    if (slug) {
      const fetchedPost = getDynamicPostBySlug(slug);
      if (fetchedPost) {
        setPost(fetchedPost);
      }
    }
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading or Post not found...</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} | Blog</title>
      </Head>
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-8 min-h-[80vh]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <h1 className="text-3xl font-bold mb-4 text-gray-800">{post.title}</h1>
        <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
          {post.body}
        </p>
      </div>
      <Footer />
    </>
  );
}
