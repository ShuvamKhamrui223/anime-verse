import NewsArticleCard from "@/components/ui/cards/news-article-card";
import { getAnimeNewsArticlesByAnimeId } from "@/utils/data-fetching";

const LatestNews = async ({ animeId }: { animeId: number }) => {
  const newsData = await getAnimeNewsArticlesByAnimeId({ animeId });

  if (newsData.data.length===0) {
    return null;
  }

  return (
    <section className="basis-full lg:basis-1/4 space-y-6">
      <h3 className="text-2xl font-semibold text-zinc-300 capitalize">
        top news
      </h3>

      <ul className="flex flex-col gap-4">
        {newsData.data.map((item) => (
          <NewsArticleCard cardContent={item} key={item.mal_id} />
        ))}
        <li className=""></li>
      </ul>
    </section>
  );
};

export default LatestNews;
