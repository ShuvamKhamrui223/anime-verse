import { getEpisodesByAnimeId } from "@/utils/data-fetching";
import Link from "next/link";
import ImageWithFallback from "../helpers/image-with-fallback";

const EpisodeList = async ({ animeId }: { animeId: number }) => {
  const { data, error } = await getEpisodesByAnimeId({ animeId });
  if (error) {
    return (
      <>
        <p className="text-red-500">{error}</p>
      </>
    );
  }
  if (!data?.data?.length) {
    return null;
  }

  return (
    <section className="flex flex-col gap-4 mt-5 py-4">
      <h3 className="text-2xl font-semibold text-zinc-200 capitalize">
        episodes
      </h3>
      <ul className="flex gap-8 items-center overflow-x-hidden">
        {data?.data?.map((episode) => (
          <li key={episode.title} className="shrink-0 basis-2xs flex flex-col">
            <Link href={episode?.url ?? ""}>
              <div className="h-40 w-full relative rounded-2xl overflow-hidden">
                {/* {episode.images?.jpg?.image_url ? ( */}
                <ImageWithFallback
                  src={
                    episode.images?.jpg?.image_url ||
                    "/landscape-placeholder.svg"
                  }
                  alt={episode.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover invert hover:scale-105 transition-transform duration-150 rounded-2xl"
                />
                {/* )  */}
              </div>
              <div className="py-2 px-2">
                <p className="text-sm text-zinc-300 first-letter:uppercase">
                  {episode.title.slice(0, 40)}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EpisodeList;
