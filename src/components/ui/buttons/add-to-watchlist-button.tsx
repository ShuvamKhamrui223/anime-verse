"use client";

import Image from "next/image";
import { useFormStatus } from "react-dom";

const AddToWatchlistButton = ({ iconOnly }: { iconOnly: boolean }) => {
  const formStatus = useFormStatus();
  return (
    <button
      className="flex items-center justify-center gap-2 text-zinc-200 rounded-full capitalize w-full bg-amber-700 hover:bg-amber-600 px-4 py-3 cursor-pointer disabled:bg-amber-800 disabled:text-zinc-400 group"
      disabled={formStatus.pending}
    >
      {formStatus.pending && (
        <div className="size-6 border-t-4 border-orange-100 rounded-full animate-spin duration-1000- ease-in"></div>
      )}
      {iconOnly ? (
        <Image
          src={"/plus.svg"}
          alt={"add to watchlist icon"}
          width={20}
          height={20}
          className={formStatus.pending ? "invert-50" : "invert"}
        />
      ) : (
        <>
          <Image
            src={"/plus.svg"}
            alt={"add to watchlist icon"}
            width={20}
            height={20}
            className={formStatus.pending ? "invert-50" : "invert"}
          />

          <span className="">add to watchlist</span>
        </>
      )}
    </button>
  );
};

export default AddToWatchlistButton;
