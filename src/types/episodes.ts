export interface IEpisodes {
    pagination: Pagination;
    data: EpisodeData[];
}

export interface EpisodeData {
    mal_id: number;
    title: string;
    episode: string;
    url: string;
    images: Images;
}

export interface Images {
    jpg: Jpg;
}

export interface Jpg {
    image_url: string;
}

export interface Pagination {
    last_visible_page: number;
    has_next_page: boolean;
}