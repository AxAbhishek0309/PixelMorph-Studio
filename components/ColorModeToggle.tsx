"use client";

import React, { useEffect, useState } from 'react';

const ColorModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // On mount, check localStorage or system preference
    const saved = localStorage.getItem('color-theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleMode = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleMode}
      aria-label="Toggle color mode"
      className="p-2 rounded-full border border-light-300 bg-white dark:bg-dark-200 dark:border-dark-100 transition-colors shadow hover:scale-110"
    >
      {isDark ? (
        // Sun icon
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-yellow-400">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414M17.95 17.95l-1.414-1.414M6.05 6.05L4.636 7.464M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      ) : (
        // Moon icon
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-indigo-500">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
        </svg>
      )}
    </button>
  );
};

export default ColorModeToggle; 