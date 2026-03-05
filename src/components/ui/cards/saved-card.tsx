import { ISavedItem } from "@/types/global";
import FramerCard from "./framer-card";
import Link from "next/link";
import ImageWithFallback from "@/components/helpers/image-with-fallback";
import UserActionButtons from "../buttons/user-action-buttons";

const SavedCard = ({ data, index }: { data: ISavedItem; index: number }) => {
  return (
    <FramerCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      viewport={{ amount: 0 }}
      className="basis-40 md:basis-60 shrink-0 w-full h-full flex flex-col hover:bg-zinc-800 rounded-t-2xl p-2"
    >
      <div className="w-full h-80 relative overflow-hidden">
        <Link href={`/anime/${data.animeId}`}>
          <ImageWithFallback
            className="object-cover w-full hover:brightness-90"
            src={data.poster_url}
            alt={data.title}
            fill
          />
        </Link>
        <UserActionButtons data={data} />
      </div>
      <div className="flex flex-col py-2">
        <Link
          href={`/anime/${data.id}`}
          className="text-sm font-semibold tracking-tight text-heading max-w-[25ch] md:max-w-[30ch] line-clamp-1 text-zinc-200"
        >
          {data.title}
        </Link>
      </div>
    </FramerCard>
  );
};

export default SavedCard;
