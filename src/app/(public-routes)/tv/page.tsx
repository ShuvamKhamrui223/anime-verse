import CardList from "@/components/ui/card-list";
import VerticalCard from "@/components/ui/cards/vertical-card";
import { TVSeries } from "@/types/top-tv-series";
import { getTopAnimeTVSeries } from "@/utils/data-fetching";

const page = async () => {
  const topSeries = await getTopAnimeTVSeries();
  if (topSeries.data.length === 0) {
    return <p className="text-lg text-zinc-200">no content found</p>;
  }
  return (
    <section className="section-padding">
      <CardList<TVSeries>
        contentList={topSeries.data}
        heading="top series"
        cardLink="/tv"
        renderItem={(series, index) => (
          <VerticalCard<TVSeries>
            cardContent={series}
            key={index}
            index={index}
            link={`tv/${series.mal_id}`}
          />
        )}
      />
    </section>
  );
};

export default page;
