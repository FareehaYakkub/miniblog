import { getPostBySlug, getAllPostSlugs } from '../../lib/postsData';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export async function getStaticPaths() {
  const slugs = getAllPostSlugs(); 
  const paths = slugs.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false, // show 404 for unknown slugs
  };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
  };
}

export default function PostDetail({ post }) {
  // Split by ". " and add back the period except last sentence
  const paragraphs = post.body
    .split('. ')
    .filter(Boolean)
    .map((sentence, idx, arr) =>
      idx === arr.length - 1 ? sentence : sentence + '.'
    );

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

        <div className="text-gray-700 text-lg leading-relaxed">
          {paragraphs.map((para, index) => (
            <p key={index} className="mb-4">
              {para}
            </p>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}



