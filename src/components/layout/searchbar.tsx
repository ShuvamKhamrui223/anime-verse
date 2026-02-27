import Form from "next/form";
const Searchbar = () => {
  return (
    <Form action={"/search"} className="w-full max-w-md mx-auto md:mx-0">
      <input type="text" name="q" placeholder="Search anime..." className="px-4 py-2 max-w-xl w-full rounded-full border border-stone-700 bg-stone-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-500" />
    </Form>
  );
};

export default Searchbar;
