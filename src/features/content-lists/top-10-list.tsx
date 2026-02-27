import VerticalCard from "@/components/ui/cards/vertical-card";
import { getTop10Anime } from "@/utils/data-fetching";

const Top10List = async () => {
  const {
    data: { data: top10 },
    error,
  } = await getTop10Anime();
  if (error) {
    return (
      <>
        <p className="text-red-500">{error}</p>
      </>
    );
  }
  return (
    <>
      {
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold mb-8 text-orange-100 capitalize border-l-8 border-orange-500 pl-4">
            top 10 anime
          </h2>

          <ul className={`horizontal-list`}>
            {top10.map((anime, index) => (
              <VerticalCard
                index={index}
                link={`/anime/${anime.mal_id}`}
                cardContent={anime}
                key={anime.mal_id}
              />
            ))}
          </ul>
        </div>
      }
    </>
  );
};

export default Top10List;
