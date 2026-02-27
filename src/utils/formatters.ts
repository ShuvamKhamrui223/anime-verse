export const slugify = ({ text }: { text: string }) => text.toLowerCase().replaceAll(" ", "-")
export const deSlugify = ({ text }: { text: string }) => text.replaceAll("-", " ")

export function formatNumberToLocale(longNum:number){
    return longNum.toLocaleString(navigator.language, {
        compactDisplay:"short",
        notation:"compact"
    })
}

export function formatDate(date:string){
    return new Date(date).toLocaleString(navigator.language,{dateStyle:"medium"})
}