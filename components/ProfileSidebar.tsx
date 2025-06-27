'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// Dummy user data for now; replace with real user context or props as needed
const user = {
  fullName: 'Your Name',
  username: 'axabhishek0309',
  email: 'your.email@example.com',
  avatar: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg',
};

const ProfileSidebar = () => {
  const [loginTime, setLoginTime] = useState<string | null>(null);

  useEffect(() => {
    setLoginTime(new Date().toLocaleString());
  }, []);

  if (!loginTime) return null;

  return (
    <aside className="w-full max-w-xs min-h-screen bg-white dark:bg-dark-200 shadow-xl flex flex-col p-6 gap-6 border-r border-light-300 dark:border-dark-100">
      <div className="flex flex-col items-center gap-3 pb-4 border-b border-light-300 dark:border-dark-100">
        <Image
          src={user.avatar}
          alt="Avatar"
          width={64}
          height={64}
          className="rounded-full border-2 border-brand"
        />
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold text-dark-200 dark:text-white">{user.fullName}</span>
          <span className="text-sm text-brand font-semibold">@{user.username}</span>
          <span className="text-xs text-light-100 dark:text-light-200 mt-1">{user.email}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
          <span className="text-dark-200 dark:text-white">Online</span>
        </div>
        <div className="flex flex-col gap-1 mt-2">
          <span className="text-light-100 dark:text-light-200">Login Time:</span>
          <span className="text-dark-200 dark:text-white font-medium">{loginTime}</span>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-auto">
        <form action="/auth/sign-out" method="POST">
          <button type="submit" className="primary-btn w-full px-6 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition">Logout</button>
        </form>
      </div>
    </aside>
  );
};

export default ProfileSidebar; 