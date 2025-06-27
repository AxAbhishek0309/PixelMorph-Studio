import React from "react";
import Image from "next/image";
import Link from "next/link";
import ColorModeToggle from "@/components/ColorModeToggle";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#8e7cf0] via-[#7b5cf6] to-[#a78bfa] relative overflow-hidden">
      {/* Abstract SVG background effect */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="1200" cy="200" r="400" fill="#a78bfa" fillOpacity="0.18" />
        <circle cx="300" cy="700" r="300" fill="#7b5cf6" fillOpacity="0.13" />
        <ellipse cx="900" cy="800" rx="350" ry="120" fill="#8e7cf0" fillOpacity="0.10" />
      </svg>

      <div className="z-10 flex flex-col items-center w-full max-w-md px-6 py-12 rounded-3xl shadow-2xl backdrop-blur-md relative"
        style={{
          background: 'rgba(36, 16, 64, 0.90)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          border: '1px solid rgba(255, 255, 255, 0.18)'
        }}
      >
        <div className="absolute top-4 right-4">
          <ColorModeToggle />
        </div>
        <div className="flex flex-row items-center justify-center mb-8 gap-2">
          <Image
            src="/assets/icons/logo-brand.svg"
            alt="PixelMorph Studio logo"
            width={40}
            height={40}
            className="mb-0"
          />
          <h2 className="text-3xl font-extrabold text-white">PixelMorph Studio</h2>
        </div>
        <div className="w-full flex flex-col items-center gap-4">
          {children}
        </div>
        <p className="text-sm font-semibold text-white mt-4">
          Don't have an account?{' '}
          <Link href="/sign-up" className="text-[#a78bfa] font-semibold hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Layout;
