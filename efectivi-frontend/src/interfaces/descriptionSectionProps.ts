import { Size } from "../utils/enums";

export interface descriptionSectionProps {
    title: string,
    body: string[],
    media: string,
    size?: Size,
    margin?: Size,
    inverseDirection?: boolean
}