const page = async ({ params }: { params: Promise<{ genreId: string }> }) => {
  const { genreId } = await params;
  
  return <section className="">{genreId}</section>;
};

export default page;
