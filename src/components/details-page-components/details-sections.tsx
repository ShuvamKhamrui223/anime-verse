import { Suspense } from "react";
import dynamic from "next/dynamic";
import DetailsHeader from "./details-header";
import { IFullDetails } from "@/types/anime-details";
import BackButton from "../ui/back-button";

const LazyEpisodesList = dynamic(() => import("./episode-list"));
const LazyRecommendation = dynamic(() => import("./recommendations"));
const LazyStatsGrid = dynamic(() => import("./stats-grid"));
const LazyReviews = dynamic(() => import("./reviews"));
const LazyLatestNews = dynamic(() => import("./latest-news"));

interface DetailsSectionsProps<T> {
  animeDetails: T;
}

function DetailsSections<T extends IFullDetails>({ animeDetails }: DetailsSectionsProps<T>) {
  return (
    <section className="section-padding flex flex-col gap-8 ">
      <BackButton/>
      {/* main content */}
      <DetailsHeader<IFullDetails> data={animeDetails} />
      {/* episodes */}
      <Suspense>
        <LazyEpisodesList animeId={animeDetails?.mal_id} />
      </Suspense>
      {/* recommendations */}
      <Suspense>
        <LazyRecommendation animeId={animeDetails.mal_id} />
      </Suspense>
      {/* bento stats */}
      {/* <Suspense>
        <LazyStatsGrid animeId={animeDetails.mal_id} />
      </Suspense> */}

      <div className="flex flex-col lg:flex-row">
        {/* reviews  */}
        <Suspense>
          <LazyReviews />
        </Suspense>
        {/* latest news */}
        <Suspense>
          <LazyLatestNews animeId={animeDetails.mal_id} />
        </Suspense>
      </div>
    </section>
  );
}

export default DetailsSections;
