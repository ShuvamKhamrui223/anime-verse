import CardList from "@/components/ui/card-list";
import VerticalCard from "@/components/ui/cards/vertical-card";
import { SearchResult } from "@/types/search";
import { getSearchedAnime } from "@/utils/data-fetching";
import { notFound } from "next/navigation";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) => {
  const { q } = await searchParams;
  // when user navigates back to the search page ui requires a hard reload
  const { data: searchedanime, error } = await getSearchedAnime({
    searchTerm: q,
  });
  if (error) {
    return (
      <>
        <p className="text-red-500">{error}</p>
      </>
    );
  }
  if (searchedanime?.data.length === 0) {
    return notFound();
  }

  return (
    <section className="section-padding">
      <CardList<SearchResult>
        contentList={searchedanime?.data || []}
        heading="top series"
        cardLink="/tv"
        renderItem={(series, index) => (
          // @ts-expect-error mismatch type
          <VerticalCard<SearchResult>
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
