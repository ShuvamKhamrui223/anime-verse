import { getEpisodesByAnimeId } from "@/utils/data-fetching";
import Image from "next/image";
import Link from "next/link";

const EpisodeList = async ({ animeId }: { animeId: number }) => {
  const episodeData = await getEpisodesByAnimeId({ animeId });

  if (episodeData.data.length == 0) {
    return null;
  }
  return (
    <section className="flex flex-col gap-4 mt-5 py-4">
      <h3 className="text-2xl font-semibold text-zinc-200 capitalize">
        episodes
      </h3>
      <ul className="flex gap-8 items-center custom-carousel">
        {episodeData.data.map((episode) => (
          <li key={episode.title} className="shrink-0 basis-2xs flex flex-col">
            <Link href={episode?.url ?? ""}>
              <div className="h-40 w-full relative rounded-2xl overflow-hidden">
                {episode.images?.jpg?.image_url ? (
                  <Image
                    src={episode.images?.jpg?.image_url}
                    alt={episode.title}
                    fill
                    loading="lazy"
                    className="object-cover invert hover:scale-105 transition-transform duration-150 rounded-2xl"
                  />
                ) : (
                  <Image
                    src={"/landscape-placeholder.svg"}
                    alt={episode.title}
                    fill
                    className="object-cover invert-100 rounded-2xl hover:scale-105 transition-transform duration-150"
                  />
                )}
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
