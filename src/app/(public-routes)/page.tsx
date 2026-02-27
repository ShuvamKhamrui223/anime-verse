import ActionAdventureList from "@/features/content-lists/action-adventure-list";
import Top10List from "@/features/content-lists/top-10-list";
import { Suspense } from "react";

export default function Home() {
  return (
    <section className="section-padding">
      <Suspense fallback={<div>Loading...</div>}>
        <Top10List />
      </Suspense>

      <Suspense>
        <ActionAdventureList />
      </Suspense>
    </section>
  );
}
