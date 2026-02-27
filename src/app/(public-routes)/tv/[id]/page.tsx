import { getAnimeDetailsById } from "@/utils/data-fetching";
import { IFullDetails } from "@/types/anime-details";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import BackButton from "@/components/ui/back-button";
import DetailsHeader from "@/components/details-page-components/details-header";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

const LazyEpisodesList = dynamic(
  () => import("@/components/details-page-components/episode-list"),
);
const LazyRecommendation = dynamic(
  () => import("@/components/details-page-components/recommendations"),
);
// const LazyStatsGrid = dynamic(() => import("@/components/details-page-components/"));
const LazyReviews = dynamic(
  () => import("@/components/details-page-components/reviews"),
);
const LazyLatestNews = dynamic(
  () => import("@/components/details-page-components/latest-news"),
);

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const {
    data: { data: animeDetails },
    error,
  } = await getAnimeDetailsById({ id });
  if (error) {
    return (
      <>
        <p className="text-red-500">{error}</p>
      </>
    );
  }


  // return <h1 className="">{animeDetails.data.title}</h1>;
  return (
    <section className="section-padding flex flex-col gap-8 ">
      <BackButton />
      {/* main content */}
      <DetailsHeader<IFullDetails> data={animeDetails} />
      {/* episodes */}
      <Suspense fallback={<LoadingSpinner />}>
        <LazyEpisodesList animeId={animeDetails.mal_id} />
      </Suspense>
      {/* recommendations */}
      <Suspense fallback={<LoadingSpinner />}>
        <LazyRecommendation animeId={animeDetails.mal_id} />
      </Suspense>
      {/* bento stats */}
      {/* <Suspense fallback={<LoadingSpinner/>}>
        <LazyStatsGrid animeId={animeDetails.data.mal_id} />
      </Suspense> */}

      <div className="flex flex-col lg:flex-row">
        {/* reviews  */}
        <Suspense fallback={<LoadingSpinner />}>
          <LazyReviews />
        </Suspense>
        {/* latest news */}
        <Suspense fallback={<LoadingSpinner />}>
          <LazyLatestNews animeId={animeDetails.mal_id} />
        </Suspense>
      </div>
    </section>
  );
};

export default page;
