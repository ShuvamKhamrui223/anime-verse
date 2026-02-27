import { getAnimeStatisticsByAnimeId } from "@/utils/data-fetching";
import { formatNumberToLocale } from "@/utils/formatters";

const StatsGrid = async ({ animeId }: { animeId: number }) => {
  const stats = await getAnimeStatisticsByAnimeId({ animeId: animeId });
  if (!stats.data) return null;
  return (
    <section className="stats-grid">
      {/* <div className="col-span-full"> */}
      <div className="basis-5/12 stats-grid-card">
        <p className="">total views</p>
        <h4 className="">{formatNumberToLocale(stats.data.total)}</h4>
      </div>
      <div className="basis-3/12 stats-grid-card">
        <p className="">completed</p>
        <h4>{formatNumberToLocale(stats.data.completed)}</h4>
      </div>
      <div className="basis-[30.58%] stats-grid-card">
        <p className="">dropped</p>
        <h4>{formatNumberToLocale(stats.data.dropped)}</h4>
      </div>
      <div className="basis-1/12 stats-grid-card">
        <p className="">on hold</p>
        <h4>{formatNumberToLocale(stats.data.on_hold)}</h4>
      </div>
      <div className="basis-5/12 stats-grid-card">
        <p className="">planned to watch</p>
        <h4>{formatNumberToLocale(stats.data.plan_to_watch)}</h4>
      </div>
    </section>
  );
};

// const PieChart = ({ scores }: { scores: Scores[] }) => {
//   const colors = [
//     "#0f172a",
//     "#f3f4f6",
//     "#2563eb",
//     "#6366f1",
//     "#10b981",
//     "#f43f5e",
//     "#fbbf24",
//     "#7c3aed",
//     "#22d3ee",
//     "#d946ef",
//   ];

//   const gradientData = scores.reduce((acc, value, index) => {
//     // Determine the start point (the end point of the previous item)
//     const start = acc.length > 0 ? acc[acc.length - 1] : 0;

//     // Calculate the end point by adding the current value
//     // We use .toFixed(2) to avoid floating point math quirks
//     const end = parseFloat((acc[index].percentage + value).toFixed(2));

//     acc.push({
//       color: colors[index],
//       start: start,
//       end: end,
//     });

//     return acc;
//   }, []);

//   const conicGradientString = gradientData
//     .map((slice) => `${slice?.color} ${slice?.start}% ${slice?.end}%`)
//     .join(", ");
//   return (
//     <>
//       <div
//         className={`size-60 outline-2 outline-amber-200 rounded-full`}
//         style={{
//           background: `${conicGradientString}`,
//         }}
//       ></div>{" "}
//       {JSON.stringify(conicGradientString)}
//     </>
//   );
// };
export default StatsGrid;
