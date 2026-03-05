export type OnboardingFormData = {
    question: string;
    options: string[];
    optional: boolean;
    // icon: LucideIcon
};

export interface ISavedItem {
    id: string;
    userId: string;
    animeId: string;
    type: string;
    title: string;
    poster_url: string;
    createdAt: Date;
    updatedAt: Date;
}
