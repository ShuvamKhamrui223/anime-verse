import { IAnimeDetails } from "@/types/anime-details";
import { AnimeNews } from "@/types/anime-news";
import { AnimeRecommendations } from "@/types/anime-recommendations";
import { Reviews as AnimeReviews } from "@/types/anime-reviews";
import { AnimeStatistics, IAnimeStatistics } from "@/types/anime-statistics";
import { IEpisodes } from "@/types/episodes";
import { IGenres } from "@/types/gneres";
import { ISearchedAnime } from "@/types/search"
import { ITopAnime } from "@/types/top-anime"
import { ITopMovies } from "@/types/top-movies";
import { ITVSeries } from "@/types/top-tv-series";
import { notFound } from "next/navigation";

const options: RequestInit = {
    method: "GET",
    headers: {
        accept: "application/json",
    },
    next: {
        revalidate: 60 * 60 * 24,
    },
};

export async function fetchAnime(url: URL, contentType?: "tv" | "movie" | "ova" | "special" | "ona" | "music" | "cm" | "pv" | "tv_special",
    filterContent?: "airing" | "upcoming" | "bypopularity" | "favorite",
) {
    url.searchParams.set("sfw", "true")
    url.searchParams.set("sort", "asc")
    url.searchParams.set("rating", "g")
    url.searchParams.set("limit", "12")
    url.searchParams.set("page", "1")
    if (contentType) { url.searchParams.set("type", contentType) }
    if (filterContent) url.searchParams.set("filter", filterContent)

    try {
        const res = await fetch(url.toString(), options);

        const data = await res.json()
        return {
            data: data,
            error: null
        }
    } catch (error) {
        if (error instanceof Error) {
            return {
                data: null,
                error: error.message
            }
        }

        return {
            data: null,
            error: "something went wrong"
        }
    }
}


export async function getTop10Anime() {
    const newURL = new URL("https://api.jikan.moe/v4/top/anime")
    const res = await fetchAnime(newURL)
    return {
        data: res.data as ITopAnime,
        error: res.error,
    }
}

export const getTopAnimeMovies = async () => {
    const newURL = new URL("https://api.jikan.moe/v4/top/anime")
    const res = await fetchAnime(newURL, "movie")
    return {
        data: res.data as ITopMovies,
        error: res.error,
    }
}


export const getTopAnimeTVSeries = async () => {
    const newURL = new URL("https://api.jikan.moe/v4/top/anime")
    const res = await fetchAnime(newURL, "tv",)
    return {
        data: res.data as ITVSeries,
        error: res.error,
    }
}

export const getTopAnimeSeries_paginated = async ({ limit, page }: { page: number, limit: number }) => {
    const newURL = new URL(`https://api.jikan.moe/v4/top/anime`)
    newURL.searchParams.set("page", page.toString())
    newURL.searchParams.set("page", limit.toString())
    const res = await fetch(newURL, options)
    const result = await res.json()
    return result as ITVSeries
}

export const getUpcomingAnimeSeries = async () => {
    const newURL = new URL("https://api.jikan.moe/v4/top/anime")
    const res = await fetchAnime(newURL, "tv", "upcoming")
    return res
}

export const getUpcomingAnimeMovies = async () => {
    const newURL = new URL("https://api.jikan.moe/v4/top/anime")
    const res = await fetchAnime(newURL, "movie", "upcoming")
    return res
}

export const getAnimeDetailsById = async ({ id }: { id: string }) => {
    const newURL = new URL(`https://api.jikan.moe/v4/anime/${id}/full`)
    const res = await fetchAnime(newURL)
    return {
        data: res.data as IAnimeDetails,
        error: res.error,
    }

}


export const getEpisodesByAnimeId = async ({ animeId }: { animeId: number }) => {
    const newURL = new URL(`https://api.jikan.moe/v4/anime/${animeId}/episodes`)
    const res = await fetchAnime(newURL)
    return {
        data: res.data as IEpisodes,
        error: res.error,
    }
}

export const getAnimeReviewsByAnimeId = async ({ animeId }: { animeId: number }) => {
    const newURL = new URL(`https://api.jikan.moe/v4/anime/${animeId}/reviews`)
    const res = await fetchAnime(newURL)
    return {
        data: res.data as AnimeReviews,
        error: res.error,
    }
}

export const getAnimeNewsArticlesByAnimeId = async ({ animeId }: { animeId: number }) => {
    const newURL = new URL(`https://api.jikan.moe/v4/anime/${animeId}/news`)
    const res = await fetchAnime(newURL)
    return {
        data: res.data as AnimeNews,
        error: res.error,
    }
}

export const getAnimeStatisticsByAnimeId = async ({ animeId }: { animeId: number }) => {
    const newURL = new URL(`https://api.jikan.moe/v4/anime/${animeId}/statistics`)
    const res = await fetchAnime(newURL)
    return {
        data: res.data as AnimeStatistics,
        error: res.error,
    }
}


export const getRecommendationsByAnimeId = async ({ animeId }: { animeId: number }) => {
    const newURL = new URL(`https://api.jikan.moe/v4/anime/${animeId}/recommendations`)
    const res = await fetchAnime(newURL)
    return {
        data: res.data as AnimeRecommendations,
        error: res.error,
    }
}

export const getSearchedAnime = async ({ searchTerm }: { searchTerm: string }) => {
    const newURL = new URL("https://api.jikan.moe/v4/anime")
    newURL.searchParams.set("q", searchTerm)
    newURL.searchParams.set("limit", "12")
    newURL.searchParams.set("page", "1")
    newURL.searchParams.set("order_by", "popularity")

    try {
        const res = await fetch(newURL, options)
        const data = await res.json()
        return {
            data: data as ISearchedAnime,
            error: null,
        }
    } catch (error) {
        if (error instanceof Error) {
            return {
                data: null,
                error: error.message
            }
        }

        return {
            data: null,
            error: "something went wrong"
        }
    }
}
