import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import Chip from "../ui/chip";
interface NotFoundSectionProps {
  suggestedContent: string[];
}
const NotFoundSection:FC<NotFoundSectionProps> = ({suggestedContent}) => {
  return (
    <section>
      <Image
        src="/lost-desktop.jpg"
        alt="error page backround image for desktop users"
        fill
        className="hiddden md:block object-cover object-left lg:object-center"
      />
      <Image
        src="/lost-mobile.jpg"
        alt="error page backround image for mobile users"
        fill
        className="block md:hidden object-cover"
      />

      <div className="text-center z-20 backdrop-brightness-25 h-screen w-full flex flex-col items-center justify-center text-white p-4 absolute inset-0">
        <h1 className="text-4xl font-bold">Lost in another world</h1>
        <p className="mt-4">
          Oops! Even the <span className="text-amber-500">Uzumnaki clan</span>{" "}
          couldn&apos;t find this page.
        </p>

        <Link
          href={"/"}
          className="mt-4 capitalize inline-block bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 transition-colors"
        >
          back to home{" "}
        </Link>
        <div className="mt-8 flex flex-wrap justify-center gap-6 max-w-2xl">
          <h2 className="text-2xl font-semibold mb-4">Popular Searches</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {suggestedContent.map((search) => (
              <Chip
                key={search}
                label={search}
                url={`/search?q=${search}`}
                style="filled"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundSection;
