import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  toggleLeftMenu: () => void;
  isLeftMenuOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleLeftMenu, isLeftMenuOpen }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-indigo-600 text-white shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={toggleLeftMenu}
              className="p-2 rounded-md hover:bg-indigo-700 focus:outline-none"
            >
              {isLeftMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            <span className="ml-4 text-xl font-semibold">My Website</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-indigo-200">Home</a>
            <a href="#" className="hover:text-indigo-200">About</a>
            <a href="#" className="hover:text-indigo-200">Services</a>
            <a href="#" className="hover:text-indigo-200">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;