// Import global styles and fonts
import "./globals.css";
import type { Metadata } from "next";
import NotFoundSection from "@/components/layout/not-found-section";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  const popularSearches = [
    "Naruto",
    "Bleach",
    "One Piece",
    "Attack on Titan",
    "My Hero Academia",
    "Demon Slayer",
    "Jujutsu Kaisen",
    "Fullmetal Alchemist",
    "Death Note",
    "Dragon Ball Z",
  ];
  return <NotFoundSection suggestedContent={popularSearches} />;
}
