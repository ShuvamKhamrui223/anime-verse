import RecommendationCard from "@/components/ui/cards/reommendation-card";
import { getRecommendationsByAnimeId } from "@/utils/data-fetching";

const Recommendations = async ({ animeId }: { animeId: number }) => {
  const recommendations = await getRecommendationsByAnimeId({ animeId });
  if (recommendations.data.length===0) {
    return null;
  }
  return (
    <section className="flex flex-col gap-8">
      <h3 className="text-2xl font-semibold text-zinc-200 capitalize">
        you might also like
      </h3>
      <ul className="flex items-center gap-8 overflow-x-hidden">
        {recommendations.data.map((recommendedAnime) => (
          <RecommendationCard
            cardContent={recommendedAnime}
            key={recommendedAnime.entry.mal_id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Recommendations;
