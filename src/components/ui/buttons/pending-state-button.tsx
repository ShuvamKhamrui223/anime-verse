"use client";

import Image from "next/image";
import { useFormStatus } from "react-dom";

const PendingStateButton = ({
  iconOnly,
  purpose,
}: {
  iconOnly: boolean;
  purpose: "ADD" | "REMOVE";
}) => {
  const formStatus = useFormStatus();
  const purposeIcon = purpose === "ADD" ? "/plus.svg" : "/minus.svg";
  const purposeText = purpose === "ADD" ? "add to watchlist" : "remove from watchlist";
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
          src={purposeIcon}
          alt={"add to watchlist icon"}
          width={20}
          height={20}
          className={formStatus.pending ? "invert-50" : "invert"}
        />
      ) : (
        <>
          <Image
            src={purposeIcon}
            alt={"add to watchlist icon"}
            width={20}
            height={20}
            className={formStatus.pending ? "invert-50" : "invert"}
          />

          <span className="">{purposeText}</span>
        </>
      )}
    </button>
  );
};

export default PendingStateButton;
