import Link from 'next/link';

const Post = ({ staticPosts, dynamicPosts }) => {
  return (
    <div className="p-6">
      <h1 className="mt-5 text-xl font-bold mb-2 text-center tracking-wider font-anton">
        Latest Blog Posts
      </h1>
      <p className="text-center uppercase font-light mb-6">
        Explore recent updates and articles
      </p>

      {/* STATIC POSTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center mb-12">
        {staticPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* NEW POSTS */}
      {dynamicPosts.length > 0 && (
        <>
          <h2 className="text-xl font-bold mb-2 text-center tracking-wider font-anton">New Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {dynamicPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const PostCard = ({ post }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden w-[400px] max-w-full">
    <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-700 text-sm mb-4 line-clamp-2">{post.body}</p>
      <Link href={post.isDynamic ? `/dynamic/${post.slug}` : `/posts/${post.slug}`}>
        <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
          Read More
        </button>
      </Link>
    </div>
  </div>
);

export default Post;