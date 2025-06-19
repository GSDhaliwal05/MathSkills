import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchBar } from './SearchBar';
import { topicInfo } from '@/data/mathContent';
import { useAuth } from '@/hooks/useAuth';

export function Navigation() {
  const [location] = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isLoading, isAuthenticated } = useAuth();

  const topics = Object.entries(topicInfo);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-calculator text-white text-xl"></i>
              </div>
              <span className="text-2xl font-bold text-gray-800 font-['Poppins']">Math Master</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Topics Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                <span className="font-medium">Topics</span>
                <motion.i
                  className={`fas fa-chevron-down text-sm`}
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                />
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, maxHeight: 0 }}
                    animate={{ opacity: 1, y: 0, maxHeight: 400 }}
                    exit={{ opacity: 0, y: -10, maxHeight: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border overflow-hidden"
                  >
                    <div className="py-2">
                      {topics.map(([slug, info]) => (
                        <Link
                          key={slug}
                          href={`/${slug}`}
                          className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors flex items-center space-x-3"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <i className={`${info.icon} text-blue-500 w-5`}></i>
                          <span>{info.title}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Search Bar */}
            <SearchBar />

            {/* Auth Section */}
            <div className="flex items-center space-x-4">
              {isLoading ? (
                <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
              ) : isAuthenticated && user ? (
                <div className="flex items-center space-x-3">
                  {user.profileImageUrl && (
                    <img 
                      src={user.profileImageUrl} 
                      alt="Profile" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  )}
                  <span className="text-gray-700 font-medium">
                    {user.firstName || user.email}
                  </span>
                  <a 
                    href="/api/logout" 
                    className="text-sm text-gray-600 hover:text-gray-800 underline"
                  >
                    Logout
                  </a>
                </div>
              ) : (
                <a 
                  href="/api/login" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Login with Replit
                </a>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: 500 }}
            exit={{ opacity: 0, maxHeight: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              <SearchBar isMobile />
              
              {/* Mobile Auth Section */}
              <div className="border-t pt-3">
                {isLoading ? (
                  <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                ) : isAuthenticated && user ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {user.profileImageUrl && (
                        <img 
                          src={user.profileImageUrl} 
                          alt="Profile" 
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      )}
                      <span className="text-gray-700 font-medium">
                        {user.firstName || user.email}
                      </span>
                    </div>
                    <a 
                      href="/api/logout" 
                      className="text-sm text-gray-600 hover:text-gray-800 underline"
                    >
                      Logout
                    </a>
                  </div>
                ) : (
                  <a 
                    href="/api/login" 
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center block"
                  >
                    Login with Replit
                  </a>
                )}
              </div>
              
              <div className="space-y-2 border-t pt-3">
                {topics.map(([slug, info]) => (
                  <Link
                    key={slug}
                    href={`/${slug}`}
                    className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors flex items-center space-x-3 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className={`${info.icon} text-blue-500 w-5`}></i>
                    <span>{info.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
