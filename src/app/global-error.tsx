"use client";
import { useTransition } from "react";

// Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [isPending, startTransition] = useTransition();
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <main className="bg-zinc-800 min-h-screen">
          <section className="section-padding">
            <h2 className="text-red-500 text-xl font-semibold">
              Something went wrong! {error.message}{" "}{error.digest}
            </h2>
            <button
              onClick={() => startTransition(() => reset())}
              disabled={isPending}
              className={`px-4 py-2 text-lg cursor-pointer  ${isPending ? "bg-orange-300" : "bg-orange-500 text-orange-100"}`}
            >
              Try again
            </button>
          </section>
        </main>
      </body>
    </html>
  );
}
