import React from 'react';
import { ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

const ForecastButton: React.FC = () => {
  return (
    <button
      className="
        relative overflow-hidden
        px-6 py-3 rounded-lg
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        text-white font-bold text-lg
        transform hover:scale-105 transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75
        shadow-lg hover:shadow-xl
        group
      "
    >
      <span className="relative z-10 flex items-center justify-center">
        <ArrowTrendingUpIcon className="w-6 h-6 mr-2 animate-pulse" />
        Forecast Data
      </span>
      <span className="
        absolute inset-0 z-0
        bg-gradient-to-r from-blue-400 via-teal-300 to-purple-500
        opacity-0 group-hover:opacity-50
        transition-opacity duration-300 ease-in-out
      "></span>
      <span className="
        absolute inset-0 z-0
        bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxsaW5lIHgxPSIwIiB5PSIwIiB4Mj0iMCIgeTI9IjQwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]
        opacity-20 group-hover:opacity-100
        transition-opacity duration-300 ease-in-out
      "></span>
      <span className="
        absolute top-0 left-0 w-full h-full
        bg-gradient-to-br from-white/20 to-transparent
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300 ease-in-out
        transform -skew-x-12
      "></span>
    </button>
  );
};

export default ForecastButton;

