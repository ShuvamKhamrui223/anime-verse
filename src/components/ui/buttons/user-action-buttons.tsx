import { isAnimeExistsInWatclist } from "@/_actions/watchlist";
import { auth } from "@clerk/nextjs/server";
import RemoveFromWatchlist from "./remove-from-watchlist";
import AddToWatchlist, { AddWatchlistType } from "./add-to-watchlist";

const UserActionButtons = async ({ data }: { data: AddWatchlistType }) => {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const { data: dbData, success } = await isAnimeExistsInWatclist({
    animeId: String(data.animeId),
    userId: userId,
  });

  if (success && dbData) {
    return (
      <RemoveFromWatchlist
        animeId={Number(data.animeId)}
        id={dbData.id}
      />
    );
  } else {
    return <AddToWatchlist data={data} />;
  }
};
export default UserActionButtons;
