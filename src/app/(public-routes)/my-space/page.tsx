import { getWatchlist } from "@/_actions/watchlist";
import SavedCard from "@/components/ui/cards/saved-card";
import { auth } from "@clerk/nextjs/server";

const page = async () => {
  const { userId } = await auth();
  const data = await getWatchlist({ userId });
  return (
    <section className="section-padding">
      <h2 className="text-2xl font-bold mb-8 text-orange-100 capitalize border-l-8 border-orange-500 pl-4">
        saved
      </h2>{" "}
      {data?.data.length === 0 ? (
        <p className="text-lg text-zinc-300 first-letter:uppercase mx-auto">
          nothing saved yet
        </p>
      ) : (
        <ul className="grid-view">
          {data?.data.map((d, index) => (
            <SavedCard data={d} key={d.id} index={index} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default page;
