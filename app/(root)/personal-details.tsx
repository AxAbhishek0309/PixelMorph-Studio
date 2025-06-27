import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Dummy user data for now; replace with real user context or props as needed
const user = {
  fullName: 'Your Name',
  email: 'your.email@example.com',
  avatar: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg',
  loginTime: new Date().toLocaleString(),
};

const PersonalDetails = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-light-400 dark:bg-dark-100 p-8">
      <div className="bg-white dark:bg-dark-200 rounded-2xl shadow-lg p-8 flex flex-col items-center gap-6 max-w-md w-full">
        <h2 className="text-2xl font-bold text-dark-200 dark:text-white mb-2">Personal Details</h2>
        <Image
          src={user.avatar}
          alt="Avatar"
          width={80}
          height={80}
          className="rounded-full border-4 border-brand"
        />
        <div className="flex flex-col items-center gap-1">
          <span className="text-lg font-semibold text-dark-200 dark:text-white">{user.fullName}</span>
          <span className="text-light-100 dark:text-light-200">{user.email}</span>
        </div>
        <div className="w-full text-center mt-2">
          <span className="text-sm text-light-100 dark:text-light-200">Login Time:</span>
          <div className="text-base font-medium text-dark-200 dark:text-white">{user.loginTime}</div>
        </div>
        <div className="flex flex-col gap-3 w-full mt-6">
          <form action="/auth/sign-out" method="POST">
            <button type="submit" className="primary-btn w-full px-6 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition">Logout</button>
          </form>
          <Link href="/auth/sign-in">
            <button className="primary-btn w-full px-6 py-2 rounded-full bg-brand text-white hover:bg-brand/90 transition">Switch Account</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails; 