import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className="text-sm text-indigo-600 font-semibold">
            {blog.category}
          </span>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-sm text-gray-500">
            {formatDate(blog.createdAt)}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-indigo-600">
          <Link to={`/blogs/${blog._id}`}>
            {blog.title}
          </Link>
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {blog.excerpt || blog.content.substring(0, 150)}...
        </p>
        
        <Link
          to={`/blogs/${blog._id}`}
          className="text-indigo-600 hover:text-indigo-800 font-semibold"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;