import Chip from "@/components/ui/chip";
import { IFullDetails } from "@/types/anime-details";
import Image from "next/image";

interface DetailsHeaderProps<T> {
  data: T;
}
function DetailsHeader<T extends IFullDetails>({
  data,
}: DetailsHeaderProps<T>) {
  return (
    <section className="flex flex-col md:flex-row md:gap-12">
      <div className="h-100 md:h-180 md:basis-1/3 relative flex items-center justify-center p-10 bg-linear-to-b from-zinc-700 to-transparent rounded-3xl">
        <Image
          src={
            data?.images?.jpg?.large_image_url ||
            data?.images?.webp?.large_image_url ||
            "/landscape-placeholder.svg"
          }
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          alt={data.title}
          className="object-contain scale-[85%]"
        />
      </div>

      <div className="flex flex-col px-8 py-6">
        <div className="flex items-center gap-4">
          <p className="inline-flex text-orange-400">
            <Image src={"/star.svg"} alt="star icon" height={15} width={15}  />
            <span className="ml-2 font-medium text-lg">
              {data.score} Rating
            </span>
          </p>
          <p className="text-zinc-200 text-sm bg-amber-700 uppercase px-3 py-1">
            {data.type}
          </p>
        </div>
        <h1 className="text-5xl md:text-7xl text-zinc-100 font-semibold uppercase max-w-[25ch]">
          {data.title}
        </h1>

        <p className="text-zinc-400 text-lg md:max-w-[85ch] py-8">
          {data.background || data.synopsis}
        </p>

        <div className="py-4 border-y border-zinc-800 grid grid-cols-2 lg:grid-cols-4 gap-8 e-full">
          <div className="flex flex-col">
            <span className="text-zinc-500 text-sm uppercase font-medium">
              studio
            </span>
            <span className="text-zinc-300">
              {data?.studios?.map((st) => st.name).join(", ")}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-zinc-500 text-sm uppercase font-medium">
              status
            </span>
            <span className="text-zinc-300">{data.status}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-zinc-500 text-sm uppercase font-medium">
              realeased
            </span>
            <span className="text-zinc-300">
              {data.broadcast.string ?? "Not found"}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-zinc-500 text-sm uppercase font-medium">
              duration
            </span>
            <span className="text-zinc-300">{data.duration}</span>
          </div>
        </div>

        <ul className="flex flex-wrap gap-3 items-center mt-10">
          {data.genres.map((g) => (
            <Chip
              key={g.name}
              label={g.name}
              style="outline"
              url={`/genres/${g.mal_id}`}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default DetailsHeader;
