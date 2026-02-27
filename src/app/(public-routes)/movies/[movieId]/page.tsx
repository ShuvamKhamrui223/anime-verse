import { getAnimeDetailsById } from "@/utils/data-fetching";
import DetailsSections from "../../../../components/details-page-components/details-sections";
import { IFullDetails } from "@/types/anime-details";

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ movieId: string }>;
// }): Promise<Metadata> {
//   const { movieId } = await params;

//   const anime = await getAnimeDetailsById({ id: movieId });

//   return {
//     title: anime.data.title,
//     description: anime.data.background,
//   };
// }

const page = async ({ params }: { params: Promise<{ movieId: string }> }) => {
  const { movieId } = await params;
  const {
    data: { data: movieDetails },
    error,
  } = await getAnimeDetailsById({ id: movieId });
  if (error) {
    return (
      <>
        <p className="text-red-500">{error}</p>
      </>
    );
  }

  return <DetailsSections<IFullDetails> animeDetails={movieDetails} />;
};

export default page;
