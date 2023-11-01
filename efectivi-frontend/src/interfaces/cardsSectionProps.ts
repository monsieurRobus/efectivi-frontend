import { Size } from "../utils/enums";

export interface cardDescription {
    icon:string,
    title: string,
    description:string
}

export interface cardSectionProps {
    cards: cardDescription[]
}