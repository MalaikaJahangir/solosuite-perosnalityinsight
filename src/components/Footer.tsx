import React from 'react';
import { Brain, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/60 backdrop-blur-md border-t border-gray-200/50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6">
          {/* Logo & Title */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-2 rounded-xl">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-bold gradient-text">Solosuite</h3>
            </div>
            <p className="text-sm text-gray-600 text-center md:text-left">
              Discover Yourself. Fuel Your Career.
            </p>
          </div>

          {/* Heart Section */}
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>for your career growth</span>
          </div>

          {/* Founder & Copyright */}
          <div className="flex flex-col items-center md:items-end space-y-1 text-sm text-gray-500">
            <div>
              Founded by{' '}
              <span className="font-bold gradient-text">Malaika Jahangir</span>
            </div>
            <div className="text-center md:text-right">
              © 2025 Solosuite. Privacy-first personality insights.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;