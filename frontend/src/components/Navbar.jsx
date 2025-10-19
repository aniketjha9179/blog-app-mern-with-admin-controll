import { Link, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const { admin, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? 'text-indigo-600 font-semibold'
      : 'text-gray-700 hover:text-indigo-600';

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            MyBlog
          </Link>

          {/* Centered Links (Desktop) */}
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            <Link to="/" className={`${isActive('/')} px-3 py-2`}>
              Home
            </Link>
            <Link to="/blogs" className={`${isActive('/blogs')} px-3 py-2`}>
              My Blog
            </Link>
            <Link to="/about" className={`${isActive('/about')} px-3 py-2`}>
              About
            </Link>
            <Link to="/contact" className={`${isActive('/contact')} px-3 py-2`}>
              Contact
            </Link>
          </div>

          {/* Admin Section (Right) */}
          <div className="hidden md:flex items-center space-x-4">
            {admin ? (
              <>
                <Link
                  to="/admin/dashboard"
                  className={`${isActive('/admin/dashboard')} px-3 py-2`}
                >
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/admin/login"
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
              >
                Admin Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pb-4">
          <div className="flex flex-col items-center space-y-2">
            <Link
              to="/"
              className={`${isActive('/')} px-3 py-2`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/blogs"
              className={`${isActive('/blogs')} px-3 py-2`}
              onClick={() => setMenuOpen(false)}
            >
              My Blog
            </Link>
            <Link
              to="/about"
              className={`${isActive('/about')} px-3 py-2`}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`${isActive('/contact')} px-3 py-2`}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>

            {admin ? (
              <>
                <Link
                  to="/admin/dashboard"
                  className={`${isActive('/admin/dashboard')} px-3 py-2`}
                  onClick={() => setMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/admin/login"
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                onClick={() => setMenuOpen(false)}
              >
                Admin Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
