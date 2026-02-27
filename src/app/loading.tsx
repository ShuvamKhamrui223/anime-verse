import LoadingSpinner from "@/components/ui/LoadingSpinner";

const loading = () => {
  return (
    <section className="min-h-screen w-full grid place-items-center">
      <LoadingSpinner />
    </section>
  );
};

export default loading;
