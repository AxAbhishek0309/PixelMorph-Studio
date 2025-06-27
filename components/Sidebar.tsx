"use client";

import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ColorModeToggle from "@/components/ColorModeToggle";

interface Props {
  fullName: string;
  avatar: string;
  email: string;
}

const Sidebar = ({ fullName, avatar, email }: Props) => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="flex flex-row items-center justify-center mb-8 gap-2">
        <Image
          src="/assets/icons/logo-brand.svg"
          alt="PixelMorph Studio logo"
          width={36}
          height={36}
          className="mb-0"
        />
        <h2 className="text-xl font-extrabold text-[#a78bfa]">PixelMorph Studio</h2>
      </div>

      <nav className="sidebar-nav">
        <ul className="flex flex-1 flex-col gap-6">
          {navItems.map(({ url, name, icon }) => (
            <Link key={name} href={url} className="lg:w-full">
              <li
                className={cn(
                  "sidebar-nav-item",
                  pathname === url && "shad-active",
                )}
              >
                <Image
                  src={icon}
                  alt={name}
                  width={24}
                  height={24}
                  className={cn(
                    "nav-icon",
                    pathname === url && "nav-icon-active",
                    "!filter-none !invert-0 !opacity-100 dark:invert dark:brightness-200"
                  )}
                />
                <p className="hidden lg:block text-light-100">{name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>

      <Image
        src="/assets/images/files-2.png"
        alt="logo"
        width={506}
        height={418}
        className="w-full"
      />

      <div className="sidebar-user-info">
        <Image
          src={avatar}
          alt="Avatar"
          width={44}
          height={44}
          className="sidebar-user-avatar"
        />
        <div className="hidden lg:block">
          <p className="subtitle-2 capitalize">{fullName}</p>
          <p className="caption">{email}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 mt-8">
        <ColorModeToggle />
      </div>
    </aside>
  );
};
export default Sidebar;
