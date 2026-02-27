import { getAnimeGenres } from "@/utils/data-fetching";

const page = async () => {
  const allGenres = await getAnimeGenres();

  return (
    <section className="section-padding">
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:">
        {allGenres?.data.map((genre) => (
          <li key={genre.name} className="">
            <span className="">{genre.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default page;
