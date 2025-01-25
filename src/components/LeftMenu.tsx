import React from 'react';
import { Home, Info, Settings, Mail } from 'lucide-react';

interface LeftMenuProps {
  isOpen: boolean;
}

const LeftMenu: React.FC<LeftMenuProps> = ({ isOpen }) => {
  return (
    <div
      className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-gray-800 text-white transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-0'
      } overflow-hidden`}
    >
      <div className="p-4">
        <ul className="space-y-4">
          <li>
            <a href="#" className="flex items-center space-x-3 hover:text-indigo-300">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 hover:text-indigo-300">
              <Info className="h-5 w-5" />
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 hover:text-indigo-300">
              <Settings className="h-5 w-5" />
              <span>Services</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 hover:text-indigo-300">
              <Mail className="h-5 w-5" />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftMenu;