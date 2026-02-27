"use client";
import {
  ClerkLoaded,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Searchbar from "./searchbar";
import { useState } from "react";
import MobileNav from "./mobile-nav";

export const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  const menuItems = [
    { label: "home", url: "/" },
    { label: "manga", url: "/manga" },
    { label: "tv series", url: "/tv" },
    { label: "movies", url: "/movies" },
    { label: "genres", url: "/genres" },
  ];

  const toggleSidebar = () => {
    setisSidebarOpen((prev) => !prev);
  };
  return (
    <nav className="relative w-full grid grid-rows-1 grid-cols-2 gap-4 py-4 px-4 md:px-10 bg-stone-950 border-b border-stone-800">
      <div className="flex items-center gap-8">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={31} height={40} />
        </Link>
        <div className="hidden md:block w-full">
          <Searchbar />
        </div>
      </div>

      <div className="flex items-center justify-end w-full gap-4 md:gap-8">
        <ul className="hidden md:flex items-center gap-4">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className={`capitalize cursor-pointer ${pathname === item.url ? "text-amber-500  hover:text-amber-600 transition-colors underline underline-offset-4 decoration-amber-600" : "text-stone-400 hover:text-stone-300"}`}
            >
              <Link href={item.url}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <div className="space-x-4 hidden md:block">
          {/* <ClerkLoaded>
            <SignedOut>
              <SignInButton>
                <button className=" px-4 py-2 capitalize rounded cursor-pointer outline-amber-700 outline">
                  sign in
                </button>
              </SignInButton>

              <SignUpButton>
                <button className="bg-amber-800 px-4 py-2 capitalize rounded cursor-pointer">
                  sign up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </ClerkLoaded> */}
        </div>
        <div className="block md:hidden">
          {/* <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </ClerkLoaded> */}
        </div>
        <button className="md:hidden cursor-pointer select-none" onClick={toggleSidebar}>
          <Image
            src="/menu.svg"
            alt="menu"
            width={16}
            height={16}
            className="invert-100 brightness-0"
          />
        </button>
      </div>
      <MobileNav
        menuItems={menuItems}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
    </nav>
  );
};
