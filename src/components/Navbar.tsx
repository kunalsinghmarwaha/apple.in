import React, { useState } from 'react';
import { Menu, Apple, X } from 'lucide-react';
import gsap from 'gsap';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      gsap.from('.menu-item', {
        y: -20,
        opacity: 0,
        stagger: 0.05,
        duration: 0.4,
        ease: 'power2.out'
      });
    }
  };

  const menuItems = [
    {
      title: 'Store',
      submenu: [
        'Shop the Latest',
        'Mac',
        'iPad',
        'iPhone',
        'Apple Watch',
        'Accessories'
      ]
    },
    {
      title: 'Mac',
      submenu: [
        'MacBook Air',
        'MacBook Pro',
        'iMac',
        'Mac mini',
        'Mac Studio',
        'Mac Pro',
        'Compare',
        'Pro Display XDR'
      ]
    },
    {
      title: 'iPad',
      submenu: [
        'iPad Pro',
        'iPad Air',
        'iPad',
        'iPad mini',
        'Apple Pencil',
        'Keyboards',
        'Compare'
      ]
    },
    {
      title: 'iPhone',
      submenu: [
        'iPhone 15 Pro',
        'iPhone 15',
        'iPhone 14',
        'iPhone 13',
        'Compare',
        'AirPods',
        'MagSafe'
      ]
    },
    {
      title: 'Watch',
      submenu: [
        'Apple Watch Series 9',
        'Apple Watch Ultra 2',
        'Apple Watch SE',
        'Compare',
        'Bands',
        'Apple Fitness+'
      ]
    },
    {
      title: 'AirPods',
      submenu: [
        'AirPods Pro 2nd gen',
        'AirPods 2nd gen',
        'AirPods 3rd gen',
        'AirPods Max',
        'Compare'
      ]
    },
    {
      title: 'TV & Home',
      submenu: [
        'Apple TV 4K',
        'HomePod',
        'HomePod mini',
        'Apple TV app'
      ]
    },
    {
      title: 'Entertainment',
      submenu: [
        'Apple One',
        'Apple TV+',
        'Apple Music',
        'Apple Arcade',
        'Apple Fitness+',
        'Apple News+',
        'Apple Podcasts',
        'Apple Books'
      ]
    },
    {
      title: 'Support',
      submenu: [
        'iPhone',
        'Mac',
        'iPad',
        'Watch',
        'AirPods',
        'Music',
        'TV'
      ]
    }
  ];

  return (
    <>
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-12">
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-gray-800/50 rounded-full transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
            
            <Apple className="w-5 h-5 text-white cursor-pointer hover:text-gray-300 transition-colors" />
            
            <div className="hidden md:flex space-x-8">
              <button className="text-white text-sm hover:text-gray-300 transition-colors">
                Search
              </button>
              <button className="text-white text-sm hover:text-gray-300 transition-colors">
                Bag
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-screen menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 pt-12 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.map((item, index) => (
                <div key={index} className="menu-item">
                  <h3 className="text-white text-lg font-semibold mb-4 pb-2 border-b border-gray-800">
                    {item.title}
                  </h3>
                  <ul className="space-y-3">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-white transition-colors text-sm block py-1"
                          onClick={(e) => e.preventDefault()}
                        >
                          {subItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="menu-item">
                  <h3 className="text-white text-sm font-semibold mb-4">Shop Special Stores</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                        Education
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                        Business
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="menu-item">
                  <h3 className="text-white text-sm font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                        Find a Store
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                        Order Status
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                        Apple Trade In
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="menu-item">
                  <h3 className="text-white text-sm font-semibold mb-4">About Apple</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                        Newsroom
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                        Investors
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                        Ethics & Compliance
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                        Events
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;