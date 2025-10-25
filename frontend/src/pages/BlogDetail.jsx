import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogAPI } from '../utils/api';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const res = await blogAPI.getBlogById(id);
      setBlog(res.data);
    } catch (err) {
      setError('Blog not found');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <p className="text-red-600 text-xl mb-4">{error}</p>
        <Link to="/blogs" className="text-indigo-600 hover:underline">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blogs" className="text-indigo-600 hover:underline mb-6 inline-block">
          ← Back to Blogs
        </Link>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-96 object-cover"
            />
          )}
          
          <div className="p-8">
            <div className="flex items-center mb-4">
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">
                {blog.category}
              </span>
              <span className="mx-3 text-gray-400">•</span>
              <span className="text-gray-600">{formatDate(blog.createdAt)}</span>
              <span className="mx-3 text-gray-400">•</span>
              <span className="text-gray-600">By {blog.author?.username}</span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {blog.title}
            </h1>

            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {blog.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <div className="prose max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
              {blog.content}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;
