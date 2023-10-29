export const contrastColour = (colour:string):string => 
{
    
    colour = colour.slice(1);
    let r:number = parseInt(colour[0]+colour[1],16);
    let g:number = parseInt(colour[2]+colour[3],16);
    let b:number = parseInt(colour[4]+colour[5],16);

    

    
    return colour;
}