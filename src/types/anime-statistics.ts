export interface IAnimeStatistics  {
    data: AnimeStatistics;
}

export interface AnimeStatistics {
    watching: number;
    completed: number;
    on_hold: number;
    dropped: number;
    plan_to_watch: number;
    total: number;
    scores: Scores[];
}

export interface Scores {
    score: number;
    votes: number;
    percentage: number;
}