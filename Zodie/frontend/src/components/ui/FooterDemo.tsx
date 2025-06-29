import React from 'react';
import { Link } from 'react-router-dom';

const FooterDemo = () => {
  return (
    <footer className="w-full py-8 px-8 flex flex-col items-center justify-center bg-white/80 backdrop-blur-md border-t border-blue-100/30 shadow-inner z-50 mt-20">
      <div className="flex flex-wrap gap-4 items-center justify-center text-blue-600 text-sm font-medium mb-2">
        <Link to="/features" className="hover:underline">Features</Link>
        <span>•</span>
        <Link to="/solutions" className="hover:underline">Solutions</Link>
        <span>•</span>
        <Link to="/about" className="hover:underline">About</Link>
      </div>
      <div className="text-xs text-blue-400">© {new Date().getFullYear()} Zordie. All rights reserved.</div>
    </footer>
  );
};

export default FooterDemo;
