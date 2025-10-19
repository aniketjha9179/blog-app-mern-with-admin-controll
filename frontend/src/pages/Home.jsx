import { Link } from 'react-router-dom';
import { Atom } from '../components/Atom';

const Home = () => {
  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Violet Storm Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle 500px at 50% 300px, rgba(16,185,129,0.35), transparent)",
        }}
      />

      {/* Page Content */}
      <div className="relative z-10 text-white">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-indigo-400">MyBlog</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover amazing stories, insights, and ideas from our community of writers.
              Read, learn, and get inspired.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/blogs"
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition"
              >
                Read Blogs
              </Link>
              <Link
                to="/admin/login"
                className="bg-white text-indigo-700 px-8 py-3 rounded-lg text-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition"
              >
                Admin Panel
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-3 gap-8  ">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-lg hover:bg-white/20 transition ">
              <div className="text-4xl mb-4">
                <Atom />
              </div>
              <h3 className="text-xl font-bold mb-2 text-indigo-400">Quality Content</h3>
              <p className="text-gray-300">
                Read well-written, informative articles on various topics.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-lg hover:bg-white/20 transition">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2 text-indigo-400">Easy to Navigate</h3>
              <p className="text-gray-300">
                Simple and clean interface for the best reading experience.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-lg hover:bg-white/20 transition">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2 text-indigo-400">Regular Updates</h3>
              <p className="text-gray-300">
                Fresh content added regularly to keep you engaged.
              </p>
            </div>
            yaha se
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;


