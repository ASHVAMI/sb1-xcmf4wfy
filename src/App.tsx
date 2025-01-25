import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LeftMenu from './components/LeftMenu';
import RightPanel from './components/RightPanel';
import Footer from './components/Footer';
import { useResponsiveScale } from './hooks/useResponsiveScale';

function App() {
  const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(true);
  const scale = useResponsiveScale();

  const toggleLeftMenu = () => {
    setIsLeftMenuOpen(!isLeftMenuOpen);
  };

  return (
    <div style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}>
      <Navbar toggleLeftMenu={toggleLeftMenu} isLeftMenuOpen={isLeftMenuOpen} />
      
      <div className="flex min-h-screen pt-16">
        <LeftMenu isOpen={isLeftMenuOpen} />
        
        <main className={`flex-1 transition-all duration-300 ${
          isLeftMenuOpen ? 'ml-64' : 'ml-0'
        }`}>
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content Area */}
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-6">Welcome to Our Website</h1>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4">Main Content</h2>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                    alt="Workspace"
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <p className="text-gray-600">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </p>
                </div>
              </div>
              
              {/* Right Panel */}
              <div className="lg:w-80">
                <RightPanel />
              </div>
            </div>
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;