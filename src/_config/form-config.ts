import z from "zod";
type FormStep = {
    id: string;
    question: string;
    fields: string[];
    schema: z.ZodObject<Record<string, z.ZodType>>;
}
export const formSteps: FormStep[] = [
    {
        id: "genre",
        question: "what is your favorite genre?",
        fields: ["genre"],
        schema: z.object({ genre: z.enum(["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", "Mecha", "Romance", "Sci-Fi", "Slice of Life"]) })
    },
    {
        id: "audiPreference",
        question: "you are comfortable in",
        fields: ["audioPreference"],
        schema: z.object({ audioPreference: z.enum(["dubbed", "subtitle"]) })
    }, {
        id: "level",
        question: "how many anime have you watched",
        fields: ["level"],
        schema: z.object({ level: z.enum(["0-5", "50+", "500+"]) })
    }, {
        id: "favoriteAnime",
        question: "pick your favorite anime",
        fields: ["favoriteAnime"],
        schema: z.object({ favoriteAnime: z.enum(["Naruto", "One Piece", "Attack on Titan", "My Hero Academia", "Demon Slayer", "Fullmetal Alchemist", "Death Note", "Dragon Ball Z"]) })
    }
]