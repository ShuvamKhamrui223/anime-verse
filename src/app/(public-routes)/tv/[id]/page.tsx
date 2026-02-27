import { getAnimeDetailsById } from "@/utils/data-fetching";
import { Metadata } from "next";
import DetailsSections from "../../../../components/details-page-components/details-sections";
import { IFullDetails } from "@/types/anime-details";
import { notFound } from "next/navigation";

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }): Promise<Metadata> {
//   const { id } = await params;

//   const anime = await getAnimeDetailsById({ id });

//   return {
//     title: anime.data.title,
//     description: anime.data.background,
//   };
// }

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const animeDetails = await getAnimeDetailsById({ id });

  if (!animeDetails) {
    return notFound();
  }

  // return <h1 className="">{animeDetails.data.title}</h1>;
  return <DetailsSections<IFullDetails> animeDetails={animeDetails.data} />;
};

export default page;
