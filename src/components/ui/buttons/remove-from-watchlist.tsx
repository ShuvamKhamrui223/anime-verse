import { deleteItemFromWatchlist } from "@/_actions/watchlist";
import PendingStateButton from "./pending-state-button";

const RemoveFromWatchlist = ({
  animeId,
  id,
}: {
  animeId: number;
  id: string;
}) => {
  return (
    <form action={deleteItemFromWatchlist}>
      <input type="hidden" name="animeId" value={animeId} />
      <input type="hidden" name="id" value={id} />
      <PendingStateButton iconOnly={false} purpose="REMOVE" />
    </form>
  );
};

export default RemoveFromWatchlist;
