import { getAnimeDetailsById } from "@/utils/data-fetching";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailsSections from "@/components/details-page-components/details-sections";


// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ animeId: string }>;
// }): Promise<Metadata> {
//   const { animeId } = await params;

//   const anime = await getAnimeDetailsById({ id: animeId });

//   return {
//     title: anime.data.title,
//     description: anime.data.background,
//   };
// }

const page = async ({ params }: { params: Promise<{ animeId: string }> }) => {
  const { animeId } = await params;
  const { data: animeDetails } = await getAnimeDetailsById({ id: animeId });

  if (!animeDetails) {
    return notFound();
  }

  return (
<DetailsSections animeDetails={animeDetails} />  );
};

export default page;
