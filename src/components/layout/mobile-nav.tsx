"use client";
import {
  ClerkLoaded,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = ({
  isSidebarOpen,
  toggleSidebar,
  menuItems,
}: {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  menuItems: { label: string; url: string }[];
}) => {
  const pathname = usePathname();
  return (
    <aside
      className={`fixed top-0 right-0 z-50 bg-zinc-950 h-full flex-col gap-8 px-5 py-10 transition-discrete duration-300 ease-in-out ${isSidebarOpen ? "w-[95%] flex" : "w-0 hidden"}`}
    >
      <button
        onClick={toggleSidebar}
        className="absolute top-0 right-0 p-2 cursor-pointer select-none"
      >
        <Image
          src="/close.svg"
          alt="close"
          width={24}
          height={24}
          className="invert"
        />
      </button>
      <div className="flex items-center gap-5">
        <ClerkLoaded>
          <SignedOut>
            <SignInButton>
              <button className="sign-in-btn">
                sign in
              </button>
            </SignInButton>

            <SignUpButton>
              <button className="sign-up-btn">
                sign up
              </button>
            </SignUpButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
      <ul className="flex flex-col gap-4 select-none">
        {menuItems.map((item) => (
          <li
            key={item.label}
            className={`capitalize text-lg cursor-pointer ${pathname === item.url ? "text-amber-500  hover:text-amber-600 transition-colors underline underline-offset-4 decoration-amber-600" : "text-stone-400 hover:text-stone-300"}`}
          >
            <Link href={item.url} onClick={toggleSidebar}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default MobileNav;
