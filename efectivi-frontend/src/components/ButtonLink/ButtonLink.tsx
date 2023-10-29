
import { useState } from 'react';
import { buttonProps } from '../../interfaces/buttonProps'
import { Size, buttonColor as buttonColorList } from '../../utils/enums';

const ButtonLink: React.FC<buttonProps> = (props:buttonProps) => {
    const label:string = props.label;
    const to:string = props.to;
    const shadow:boolean = props.shadow ? props.shadow : false;
    const buttonColor:buttonColorList = props.buttonColor;
    const buttonSize:Size = props.buttonSize;
    
    const padding = ()=>{
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
        backgroundColor: props.buttonColor,
        padding: padding(),
        borderRadius: '1em',
        boxShadow: shadow? '2px 2px 2px #1c1c1c' : 'none',
        transition: 'all 0.3s'
    }

    const activeStyle = {
        ...buttonStyle,
        backgroundColor: buttonColorList.light,
        transform: 'translate(10px,10px)'
    }

    const [buttonStyles,setButtonStyles] = useState(buttonStyle)

  return (
    <a href={to}>
        <span className={"button-link"}
            onMouseDown={e => setButtonStyles(activeStyle)}
            onMouseUp={e => setButtonStyles(buttonStyle)}
            style={buttonStyles}>
            {label}
        </span>
    </a>
  )
}

export default ButtonLink