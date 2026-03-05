-- CreateTable
CREATE TABLE "SavedAnime" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "poster_url" TEXT NOT NULL,

    CONSTRAINT "SavedAnime_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SavedAnime_userId_key" ON "SavedAnime"("userId");
