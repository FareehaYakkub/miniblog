import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Homepage from '../components/Homepage';
import Post from '../components/Post';
import { dynamicPosts } from '../lib/dynamicStore'; 

export default function Home({ quote, posts }) {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Browse the latest articles and thoughts on My Mini Blog." />
        <meta name="keywords" content="blog, articles, tech, lifestyle, news" />
        <link rel="icon" href="/miniblogicon.svg" />
      </Head>
      <Header />
      <Homepage quote={quote} />
      <Post staticPosts={posts} dynamicPosts={dynamicPosts} />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const host = context.req.headers.host;
  const protocol = host.includes('localhost') ? 'http' : 'https';

  const [quoteRes, postRes] = await Promise.all([
    fetch('http://api.quotable.io/random'),
    fetch(`${protocol}://${host}/api/posts`),
  ]);

  const [quote, posts] = await Promise.all([
    quoteRes.json(),
    postRes.json(),
  ]);

  return {
    props: {
      quote,
      posts,
    },
  };
}
