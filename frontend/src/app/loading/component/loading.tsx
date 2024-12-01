"use client"

import React, { useState, useEffect } from 'react';

const LoadingBar: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          setIsLoading(false);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 300); // Roughly 7 seconds to reach 100%

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleAccess = () => {
    // Add your access logic here
    console.log('Accessing...');
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-4">
      {isLoading ? (
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4">
          <div 
            className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full transition-all duration-500 ease-out" 
            style={{ 
              width: `${progress}%`,
              animation: 'pulse 1.5s infinite',
            }}
          ></div>
          <style jsx>{`
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.7; }
            }
          `}</style>
        </div>
      ) : (
        <button 
          onClick={handleAccess}
          className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          <a href="/forecast">Access</a>
          
        </button>
      )}
    </div>
  );
};

export default LoadingBar;