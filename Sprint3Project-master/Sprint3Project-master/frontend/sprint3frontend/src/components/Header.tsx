import React from 'react';
import { ShoppingBag, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-slate-800">
          <ShoppingBag className="h-8 w-8 text-blue-600" />
          <span>OrderTracker</span>
        </Link>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 text-slate-600 hover:text-slate-800 transition-colors">
            <User className="h-5 w-5" />
            <span>Profile</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;