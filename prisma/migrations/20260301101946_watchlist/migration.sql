/*
  Warnings:

  - You are about to drop the `SavedAnime` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "SavedAnime";

-- CreateTable
CREATE TABLE "Watchlist" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "animeId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "poster_url" TEXT NOT NULL,

    CONSTRAINT "Watchlist_pkey" PRIMARY KEY ("id")
);
