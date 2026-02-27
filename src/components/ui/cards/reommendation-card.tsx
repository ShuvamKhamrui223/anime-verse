import { AnimeRecommendation } from "@/types/anime-recommendations";
import Image from "next/image";
import Link from "next/link";

const RecommendationCard = ({
  cardContent,
}: {
  cardContent: AnimeRecommendation;
}) => {
  return (
    <div className="basis-40 md:basis-60 shrink-0 w-full h-full flex flex-col">
      <Link href={`/anime/${cardContent.entry.mal_id}`}>
        <div className="w-full h-80 relative">
          <Image
            className="object-cover w-full rounded"
            src={
              cardContent.entry.images.webp.large_image_url ||
              cardContent.entry.images.jpg.large_image_url ||
              "/landscape-placeholder.svg"
            }
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={cardContent.entry.title}
            fill
          />
        </div>
      </Link>
      <div className="flex flex-col py-2">
        <h5 className="text-sm font-semibold tracking-tight text-heading text-zinc-200">
          {cardContent.entry.title.slice(0, 20)}{" "}
        </h5>
      </div>
    </div>
  );
};

export default RecommendationCard;
