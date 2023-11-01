import { Size } from "../utils/enums";

export interface heroSectionProps {
    title: string,
    subtitle: string,
    buttonText: string,
    urlDestination: string,
    media:string,
    margin?:Size
}