import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function Loading() {
  return (
    <section className="min-h-screen w-full grid place-items-center">
      <LoadingSpinner />
    </section>
  );
}
