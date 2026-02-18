"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  const menuItems = [
    { label: "home", url: "/" },
    { label: "manga", url: "/manga" },
    { label: "series", url: "/series" },
    { label: "movies", url: "/movies" },
    { label: "genres", url: "/genres" },
  ];
  return (
    <nav className="w-full  flex items-center justify-between gap-4 py-4 px-10 bg-stone-950 border-b border-stone-800">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={31} height={40} />
      </Link>
      <ul className="flex items-center gap-4">
        {menuItems.map((item) => (
          <li
            key={item.label}
            className={`capitalize cursor-pointer ${pathname === item.url ? "text-amber-500  hover:text-amber-600 transition-colors underline underline-offset-4 decoration-amber-600" : "text-stone-400 hover:text-stone-300"}`}
          >
            <Link href={item.url}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
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
      </div>
    </nav>
  );
};
