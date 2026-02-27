export interface IGenres {
    data: IGenre[];
}

export interface IGenre {
    mal_id: number;
    name: string;
    url: string;
    count: number;
}