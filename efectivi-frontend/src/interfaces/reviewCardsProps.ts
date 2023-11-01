import { Size } from "../utils/enums"

export interface reviewCardsSectionProps {
    title:string,
    padding?:Size,
    cards:reviewCardProps[],    
    marginSize?: Size
}

export interface reviewCardProps {
    stars:number,
    title:string,
    description:string,
    url:string,
}