import ImageWithFallback from "@/components/helpers/image-with-fallback";
import { AnimeNewsArticleEntry } from "@/types/anime-news";
import { formatDate } from "@/utils/formatters";
import Link from "next/link";

const NewsArticleCard = ({
  cardContent,
}: {
  cardContent: AnimeNewsArticleEntry;
}) => {
  return (
    <article className="flex items-center gap-4">
      {/* {cardContent.images.jpg.image_url ? (
        <ImageWithFallback
          src={cardContent.images.jpg.image_url || "/landscape-placeholder.svg"}
          alt={cardContent.title.slice(25)}
          width={60}
          height={20}
          loading="lazy"
          fetchPriority="low"
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover sm:w-20 h-auto"
        />
      ) : null} */}
      <div className="flex flex-col gap-2">
        <Link
          href={cardContent.url}
          className="text-zinc-200 hover:text-orange-500 max-w-[40ch] line-clamp-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          {cardContent.title}
        </Link>
        <small className="text-zinc-200">
          by {cardContent.author_username}
        </small>
        <small className="text-zinc-400">{formatDate(cardContent.date)}</small>
      </div>
    </article>
  );
};

export default NewsArticleCard;
