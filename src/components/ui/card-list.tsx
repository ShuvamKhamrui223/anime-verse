import dynamic from "next/dynamic";
import { ReactNode, Suspense } from "react";

const LoaderMore = dynamic(() => import("@/features/infinite-loading/loader"));

interface CardListProps<T> {
  heading: string;
  cardLink?: string;
  contentList: T[];
  renderItem: (item: T, index: number) => ReactNode;
}
function CardList<T>({
  heading,
  contentList,
  renderItem,
}: CardListProps<T>) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold mb-8 text-orange-100 capitalize border-l-8 border-orange-500 pl-4">
        {heading}
      </h2>

      <ul
        className={`w-full flex-1 grid-view gap-4 overflow-x-auto px-5 scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-orange-600 scroll-smooth`}
      >
        {contentList.length > 0 &&
          contentList.map((item, index) => renderItem(item, index))}
      </ul>
      <Suspense>
        <LoaderMore />
      </Suspense>
    </div>
  );
}

export default CardList;
