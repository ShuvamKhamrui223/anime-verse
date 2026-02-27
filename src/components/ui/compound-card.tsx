import { SearchResult } from "@/types/search";
import { singleAnime } from "@/types/top-anime";
import { slugify } from "@/utils/formatters";
import Image from "next/image";
import Link from "next/link";
import FramerCard from "./cards/framer-card";

type CardContent = singleAnime | SearchResult;

interface CardProps {
  children: React.ReactNode;
  index?: number;
  className?: string;
}

interface ImageProps {
  cardContent: CardContent;
  link: string;
}

interface InfoProps {
  children: React.ReactNode;
}

interface TitleProps {
  cardContent: CardContent;
}

interface GenresProps {
  cardContent: CardContent;
}

// Root
const VerticalCard = ({ children, index, className }: CardProps) => {
  return (
    <FramerCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index ?? 0 * 0.002 }}
      className={`basis-40 md:basis-60 shrink-0 w-full h-full flex flex-col hover:bg-zinc-800 rounded-t-2xl p-2 ${className ?? ""}`}
    >
      {children}
    </FramerCard>
  );
};

// Image with score badge
const CardImage = ({ cardContent, link }: ImageProps) => {
  const imageSrc =
    cardContent.images.webp === undefined
      ? cardContent.images.jpg.large_image_url
      : cardContent.images.webp.large_image_url;

  return (
    <Link href={link}>
      <div className="w-full h-80 relative overflow-hidden">
        <Image
          className="object-cover w-full hover:brightness-90 scale-95"
          src={imageSrc}
          alt={cardContent.title_english ?? cardContent.title}
          fill
        />
        {cardContent.score ? (
          <div className="absolute top-5 right-5 bg-zinc-900 rounded-full px-2">
            <span className="text-orange-400 text-center text-xs">
              ⭐{cardContent.score}
            </span>
          </div>
        ) : null}
      </div>
    </Link>
  );
};

// Info container
const CardInfo = ({ children }: InfoProps) => {
  return <div className="flex flex-col py-2">{children}</div>;
};

// Title
const CardTitle = ({ cardContent }: TitleProps) => {
  return (
    <h5 className="text-sm font-semibold tracking-tight text-heading max-w-[25ch] md:max-w-[30ch] line-clamp-1 text-zinc-200">
      {cardContent.title_english ?? cardContent.title}
    </h5>
  );
};

// Genres
const CardGenres = ({ cardContent }: GenresProps) => {
  return (
    <ul>
      {cardContent.genres.slice(0, 2).map((genre) => (
        <Link
          href={`/genres/${slugify({ text: genre.name })}`}
          className="text-zinc-400 text-xs"
          key={genre.name}
        >
          {genre.name}{" "}
        </Link>
      ))}
    </ul>
  );
};

// Attach sub-components
VerticalCard.Image = CardImage;
VerticalCard.Info = CardInfo;
VerticalCard.Title = CardTitle;
VerticalCard.Genres = CardGenres;

export default VerticalCard;
// "use client";
// import { createContext, PropsWithChildren, useContext } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { TVSeries } from "@/types/top-tv-series";

// type TAnimeCardContext = {
//   cardContent: TVSeries;
// };

// const AnimeCardContext = createContext<TAnimeCardContext | undefined>(
//   undefined,
// );

// const useAnimeCardContext = () => {
//   const ctx = useContext(AnimeCardContext);

//   if (!ctx) {
//     throw new Error("this hook can't be used outside AnimeCardContext");
//   }

//   return ctx;
// };

// type ICardProps = PropsWithChildren & {
//   cardContent: TVSeries;
// };
// type CompoundCardComponent = React.FC<ICardProps> & {
//   Title: React.FC;
//   CoverImage: React.FC;
//   Rating: React.FC;
// };

// const CompoundCard:CompoundCardComponent=({ cardContent, children })=> {
//   return (
//     <AnimeCardContext.Provider value={{ cardContent }}>
//       <Link
//         href={cardContent.mal_id.toString()}
//         className="basis-60 flex flex-row items-start bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs md:flex-row md:max-w-xl "
//       >
//         {children}
//       </Link>
//     </AnimeCardContext.Provider>
//   );
// }
// CompoundCard.Title =function AnimeCardTitle() {

//   const { cardContent } = useAnimeCardContext();
//   return (
//     <div className="absolute top-5 right-5 bg-zinc-900 rounded-full px-2">
//       <span className="text-orange-400 text-center text-xs">
//         ⭐{cardContent.score}
//       </span>
//     </div>
//   );
// }

// CompoundCard.CoverImage = function AnimeCardCoverImage() {
//   const { cardContent } = useAnimeCardContext();
//   return (
//     <Link href={""}>
//       <div className="w-full h-80 relative">
//         <Image
//           className="object-cover w-full rounded"
//           src={cardContent.images.webp.large_image_url}
//           alt={cardContent.title}
//           fill
//         />
//       </div>
//     </Link>
//   );
// };

// CompoundCard.Rating = function AnimeCardRating() {
//   const { cardContent } = useAnimeCardContext();
//   return (
//     <div className="absolute top-5 right-5 bg-zinc-900 rounded-full px-2">
//       <span className="text-orange-400 text-center text-xs">
//         ⭐{cardContent.score}
//       </span>
//     </div>
//   );
// };
// export default CompoundCard
// {
//   /* {direction === "column" ? ( */
// }
// // {children}
// {
//   /* ) : ( */
// }
// {
//   /* <Link
//       href={link}
//       className="basis-60 flex flex-row items-start bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs md:flex-row md:max-w-xl "
//     >
//       <div className="h-full w-40 relative">
//         <Image
//           className="object-cover w-full rounded-base h-64 md:h-auto md:w-48 mb-4 md:mb-0"
//           src={cardContent.images.webp.large_image_url}
//           alt={cardContent.title}
//           fill
//         />
//       </div>
//       <div className="flex flex-col justify-between md:p-4 leading-normal">
//         <h5 className="mb-2 text-2xl font-bold tracking-tight text-heading text-zinc-200">
//           {cardContent.title}
//         </h5>
//       </div>
//     </Link>
//   )} */
// }
