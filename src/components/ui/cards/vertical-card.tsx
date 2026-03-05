import Link from "next/link";
import FramerCard from "./framer-card";
import { singleAnime } from "@/types/top-anime";
import ImageWithFallback from "@/components/helpers/image-with-fallback";

interface Props<T> {
  cardContent: T;
  link: string;
  index: number;
}

function VerticalCard<T extends singleAnime>({
  cardContent,
  link,
  index,
}: Props<T>) {
  return (
    <FramerCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      viewport={{ amount: 0 }}
      className="basis-40 md:basis-60 shrink-0 w-full h-full flex flex-col hover:bg-zinc-800 rounded-t-2xl p-2"
    >
      <Link href={link}>
        <div className="w-full h-80 relative overflow-hidden">
          <ImageWithFallback
            className="object-cover w-full hover:brightness-90"
            src={
              cardContent.images.webp === undefined
                ? cardContent.images.jpg.large_image_url
                : cardContent.images.webp.large_image_url
            }
            alt={cardContent.title_english ?? cardContent.title}
            fill
          />
          {/* <AddToWatchlistButton /> */}
          {cardContent.score ? (
            <div className="absolute top-5 right-5 bg-zinc-900 rounded-full px-2">
              <span className="text-orange-400 text-center text-xs">
                ⭐{cardContent.score}
              </span>
            </div>
          ) : null}
        </div>
      </Link>
      <div className="flex flex-col py-2">
        <h5 className="text-sm font-semibold tracking-tight text-heading max-w-[25ch] md:max-w-[30ch] line-clamp-1 text-zinc-200">
          {cardContent.title_english ?? cardContent.title}
        </h5>
        {/* <ul className="">
          {cardContent.genres.slice(0, 2).map((genre) => (
            <Link
              href={`/genres/${slugify({ text: genre.name })}`}
              className="text-zinc-400 text-xs"
              key={genre.name}
            >
              {genre.name}{" "}
            </Link>
          ))}
        </ul> */}
      </div>
    </FramerCard>
  );
}

export default VerticalCard;
