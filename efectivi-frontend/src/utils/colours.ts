export const contrastColour = (colour:string):string => 
{
    
    colour = colour.slice(1);
    const r:number = parseInt(colour[0]+colour[1],16);
    const g:number = parseInt(colour[2]+colour[3],16);
    const b:number = parseInt(colour[4]+colour[5],16);

    const light = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    const textColour = light > 0.5 ? "#000000" : "#FFFFFF";

    
    return textColour;
}