export interface ITopMovies {
    pagination: Pagination;
    data: TopMovie[];
}

export interface TopMovie {
    mal_id: number;
    url: string;
    images: Images;
    trailer: Trailer;
    approved: boolean;
    titles: Titles[];
    title: string;
    title_english: string | null;
    title_japanese: string;
    title_synonyms: string[] | unknown[];
    type: string;
    source: string;
    episodes: number;
    status: string;
    airing: boolean;
    aired: Aired;
    duration: string;
    rating: string;
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    background: string;
    season: null;
    year: null;
    broadcast: Broadcast;
    producers: unknown[] | Producers[];
    licensors: unknown[] | Licensors[];
    studios: Studios[];
    genres: Genres[];
    explicit_genres: unknown[];
    themes: Themes[] | unknown[];
    demographics: Demographics[] | unknown[];
}

export interface Demographics {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

export interface Themes {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

export interface Genres {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

export interface Studios {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

export interface Licensors {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

export interface Producers {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

export interface Broadcast {
    day: null;
    time: null;
    timezone: null;
    string: null;
}

export interface Aired {
    from: string;
    to: null;
    prop: Prop;
    string: string;
}

export interface Prop {
    from: From;
    to: To;
}

export interface To {
    day: null;
    month: null;
    year: null;
}

export interface From {
    day: number;
    month: number;
    year: number;
}

export interface Titles {
    type: string;
    title: string;
}

export interface Trailer {
    youtube_id: null;
    url: null;
    embed_url: string | null;
    images: Images2;
}

export interface Images2 {
    image_url: null;
    small_image_url: null;
    medium_image_url: null;
    large_image_url: null;
    maximum_image_url: null;
}

export interface Images {
    jpg: Jpg;
    webp: Webp;
}

export interface Webp {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
}

export interface Jpg {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
}

export interface Pagination {
    last_visible_page: number;
    has_next_page: boolean;
    current_page: number;
    items: Items;
}

export interface Items {
    count: number;
    total: number;
    per_page: number;
}