import CardList from "@/components/ui/card-list";
import VerticalCard from "@/components/ui/cards/vertical-card";
import { TopMovie } from "@/types/top-movies";
import { getTopAnimeMovies } from "@/utils/data-fetching";

const page = async () => {
  const {
    data: { data: movies },
    error,
  } = await getTopAnimeMovies();
  if (error) {
    return (
      <>
        <p className="text-red-500">{error}</p>
      </>
    );
  }

  if(movies.length===0){
    return 
  }
  return (
    <section className="section-padding">
      <CardList<Readonly<TopMovie>>
        contentList={movies}
        cardLink={"/movies"}
        heading="top movies"
        renderItem={(anime, index) => (
          <VerticalCard<TopMovie>
            cardContent={anime}
            key={anime.mal_id}
            link={`movies/${anime.mal_id}`}
            index={index}
          />
        )}
      />
    </section>
  );
};

export default page;
