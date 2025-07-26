import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { addDynamicPost, getDynamicPosts } from '../lib/dynamicStore';
import { useRouter } from 'next/router';

export default function NewPost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const localUrl = URL.createObjectURL(file);
      setImageFile({ file, preview: localUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError('');

    if (!title || !body || !imageFile) {
      setError('All fields are required.');
      return;
    }

    const existingPosts = getDynamicPosts();

    // Check if title already exists (case-insensitive)
    const isDuplicate = existingPosts.some(
      (post) => post.title.toLowerCase() === title.toLowerCase()
    );

    if (isDuplicate) {
      setError('A post with this title already exists. Please choose a different title.');
      return;
    }

    const slug = title.toLowerCase().replace(/\s+/g, '-');
    const newPost = {
      slug,
      title,
      body,
      image: imageFile.preview,
      isDynamic: true,
    };

    addDynamicPost(newPost);
    router.push('/');
  };

  return (
    <>
      <Head>
        <title>Create New Post | Blog</title>
      </Head>
      <Header />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-light mb-6 text-center text-gray-800">
          Create a New Post
        </h1>

        {error && (
          <div className="mb-4 text-red-600 font-semibold text-center">{error}</div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md space-y-6"
        >
          {/* Title input */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Post Title
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
              required
            />
          </div>

          {/* Body input */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Post Body
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-md px-4 py-2 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-gray-500"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Enter content..."
              required
            />
          </div>

          {/* Image input */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md cursor-pointer bg-white file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700hover:file:bg-blue-100"
              required
            />
            {imageFile && (
              <img
                src={imageFile.preview}
                alt="Preview"
                className="mt-4 rounded-md w-full h-48 object-cover"
              />
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-md transition"
          >
            Submit Post
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}
