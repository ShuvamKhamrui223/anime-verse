"use server";

import { prisma } from "@/lib/prisma";
import { ISavedItem } from "@/types/global";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export type intialState = {
    success: boolean,
    message: "ADDED" | "DENIED" | null
}
export async function addToWatchlist(formData: FormData) {
    const { userId, isAuthenticated } = await auth()
    const animeId = formData.get("animeId") as string
    const title = formData.get("title") as string
    const posterUrl = formData.get("poster_url") as string
    const contentType = formData.get("type") as string

    if (!animeId || !posterUrl || !title) {
        return
    }

    if (!isAuthenticated || !userId) {
        return
    }

    try {

        await prisma.watchlist.create({
            data: {
                animeId: Number(animeId),
                userId: userId, poster_url: posterUrl,
                title,
                type: contentType.toLocaleLowerCase()
            }
        })

        revalidatePath("/my-space")
    }
    catch (error) {
        console.log(error)
        throw new Error("failed to save to watchlist");

    }

}

export async function getWatchlist({ userId }: { userId: string | null }) {
    if (!userId) {
        return
    }

    try {

        const savedContent = await prisma.watchlist.findMany({ where: { userId }, orderBy: { createdAt: "desc" } })
        return {
            data: savedContent as ISavedItem[] | []
        }
    } catch (error) {
        console.error(error)
        throw new Error("failed to fetch saved content");

    }
}

export async function deleteItemFromWatchlist(formdata: FormData) {
    const animeId = formdata.get("animeId") as string
    const dbContentId = formdata.get("id") as string
    const { userId } = await auth()
    if (!userId || !animeId || !dbContentId) {
        return
    }

    try {
        await prisma.watchlist.delete({ where: { id: dbContentId } })

        // revalidatePath(``)
        revalidatePath("/my-space")
    } catch (error) {
        console.error(error)
        throw new Error("failed to delete");

    }
}

export async function isAnimeExistsInWatclist({ animeId, userId }: { userId: string, animeId: string }) {
    try {
        const isExists = await prisma
            .watchlist
            .findFirst({
                where: {
                    AND: [
                        { userId: userId },
                        { animeId: Number(animeId) }]
                }
            })
        if (isExists) {
            return { data: isExists, success: true }
        } else {
            return { success: false, data: null }
        }
    } catch (error) {
        console.error(error)
        throw new Error("failed to check content's existence");

    }
}