import { Navbar } from "@/components/layout/navbar";
import Searchbar from "@/components/layout/searchbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex min-h-screen flex-col bg-zinc-900">
      <Navbar />
      <div className="block md:hidden max-w-[95%] w-full mx-auto py-8">
        <Searchbar />
      </div>

      <main className="flex-1 section-padding">{children}</main>
    </div>
  );
}
