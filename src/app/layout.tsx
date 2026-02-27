import type { Metadata } from "next";
import { Raleway, Quicksand } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import NextTopLoader from "nextjs-toploader";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const quickSand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: { template: `%s | anime finder`, default: "anime finder" },
  description: "Find your next anime to watch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ theme: [dark] }}>
      <html lang="en">
        <body
          className={`${raleway.variable} ${quickSand.variable} antialiased`}
        >
          {children}
          <NextTopLoader color="orange" showSpinner={false} />
          {/* <footer>Anime Finder Footer footer</footer> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
