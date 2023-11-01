
import { useState } from 'react';
import { buttonProps } from '../../interfaces/buttonProps'
import { Size, buttonColor as buttonColorList } from '../../utils/enums';
import './ButtonLink.css';
import { contrastColour } from '../../utils/colours';

const ButtonLink: React.FC<buttonProps> = (props:buttonProps) => {
    const label:string = props.label;
    const to:string = props.to;
    const shadow:boolean = props.shadow ? props.shadow : false;
    const buttonColor:buttonColorList = props.buttonColor;
    const buttonSize:Size = props.buttonSize;
    
    const padding = ():string=>{
        switch (buttonSize){
            case Size.xs: 

                return '0.5rem';
            case Size.s: 

                return '0.7rem';
            case Size.m: 

                return '1rem';
            case Size.l: 

                return '1.2rem';
            case Size.xl: 

                return '1.5rem';
        }
    }


    const margin = ():string=>{
        switch (buttonSize){
            case Size.xs: 
                
                return '0.5rem';
            case Size.s: 

                return '0.7rem';
            case Size.m: 

                return '1rem';
            case Size.l: 

                return '1.2rem';
            case Size.xl: 

                return '1.5rem';
        }
    }

    const buttonStyle = {
        backgroundColor: buttonColor,
        color: contrastColour(buttonColor),
        padding: padding(),
        margin: margin(),
        borderRadius: '1em',
        boxShadow: shadow? '2px 2px 2px #1c1c1c' : 'none',
        transition: 'all 0.3s ease-in'
    }

    const activeStyle = {
        ...buttonStyle,
        color: buttonColorList.dark,
        backgroundColor: buttonColorList.light,
        transform: 'translate(10px,10px)'
    }
    const hoverStyles = {
        ...buttonStyle,        
        color: buttonColorList.dark,
        backgroundColor: buttonColorList.light,
        boxShadow: `0px 0px 10px ${buttonColorList.light}`
    }

    const [buttonStyles,setButtonStyles] = useState(buttonStyle)

    return (
        <a  className={"button-link"} href={to}>
            <span 
                onMouseDown={() => setButtonStyles(activeStyle)}
                onMouseEnter={()=> setButtonStyles(hoverStyles)}
                onMouseUp={() => setButtonStyles(buttonStyle)}
                onMouseLeave={()=> setButtonStyles(buttonStyle)}
                style={buttonStyles}>
                {label}
            </span>
        </a>
    )
}

export default ButtonLink