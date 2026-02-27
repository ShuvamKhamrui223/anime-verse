import NotFoundSection from "@/components/layout/not-found-section";

export default function SeriesNotFound() {
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
