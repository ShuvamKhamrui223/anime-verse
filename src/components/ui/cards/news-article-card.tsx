import { AnimeNewsArticleEntry } from "@/types/anime-news";
import { formatDate } from "@/utils/formatters";
import Image from "next/image";
import Link from "next/link";

const NewsArticleCard = ({
  cardContent,
}: {
  cardContent: AnimeNewsArticleEntry;
}) => {
  return (
    <article className="flex items-center gap-4">
      <Image
        src={cardContent.images.jpg.image_url ?? "/landscape-placeholder.svg"}
        alt={cardContent.title}
        width={60}
        height={30}
        loading="lazy"
        className="object-cover"
      />
      <div className="flex flex-col gap-2">
        <Link
          href={cardContent.url}
          className="text-zinc-200 hover:text-orange-500 max-w-[40ch] line-clamp-1"
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
