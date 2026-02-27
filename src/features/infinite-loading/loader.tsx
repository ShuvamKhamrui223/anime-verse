"use client";
import VerticalCard from "@/components/ui/cards/vertical-card";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { TVSeries } from "@/types/top-tv-series";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

let pageNumber = 2;

const LoaderMore = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [animeData, setanimeData] = useState<TVSeries[]>([]);

  useEffect(() => {
    if (inView) {
      const newURL = new URL(`https://api.jikan.moe/v4/top/anime`);
      newURL.searchParams.set("page", pageNumber.toString());
      newURL.searchParams.set("limit", "10");
      fetch(newURL)
        .then((res) => res.json())
        .then((result) => setanimeData([...animeData, ...result.data]));
      pageNumber++;
    }
  }, [inView, animeData]);

  return (
    <>
      <ul className="grid-view">
        {animeData.map((data, index) => (
          <VerticalCard
            cardContent={data}
            index={index}
            key={`${index}-${data.mal_id}`}
            link={`${data.type === "tv" || data.type === "movie" ? data.type.toLocaleLowerCase() : "anime"}/${data.mal_id}`}
          />
        ))}
      </ul>
      <div ref={ref} className="flex items-center justify-center w-full py-6">
        <LoadingSpinner ref={ref} />
      </div>
    </>
  );
};

export default LoaderMore;
