import { Size, buttonColor } from "../utils/enums"


export interface buttonProps {
    label: string,
    to: string,
    shadow?: boolean,
    buttonColor: buttonColor,
    buttonSize: Size
}

