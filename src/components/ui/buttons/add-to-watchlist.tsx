import { addToWatchlist } from "@/_actions/watchlist";
import PendingStateButton from "./pending-state-button";

export interface AddWatchlistType {
  animeId: string;
  title: string;
  poster_url: string;
  type: string;
}

const AddToWatchlist = ({ data }: { data: AddWatchlistType }) => {
  return (
    <form action={addToWatchlist}>
      <input type="hidden" name="animeId" value={data.animeId.toString()} />
      <input type="hidden" name="title" value={data.title} />
      <input type="hidden" name="poster_url" value={data.poster_url} />
      <input type="hidden" name="type" value={data.type} />
      <PendingStateButton iconOnly={false} purpose="ADD" />{" "}
    </form>
  );
};

export default AddToWatchlist;
