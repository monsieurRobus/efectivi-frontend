import React from 'react'
import { heroSectionProps } from '../../interfaces/heroSectionProps'
import ButtonLink from '../ButtonLink/ButtonLink';
import { Size, buttonColor } from '../../utils/enums';
import './HeroSection.css'
const HeroSection: React.FC<heroSectionProps> = (props:heroSectionProps) => {

    const title:string = props.title;
    const subtitle:string = props.subtitle;
    const media:string = props.media;
    const urlDestination:string = props.urlDestination;
    const buttonText:string = props.buttonText;
    const marginSize:(Size|undefined) = props.margin;

    const margin = (size:Size):string => {

        switch (size)
        {
            case (Size.xs):
                return "0"
            case (Size.s):
                return "0.4rem"
            case (Size.m):
                return "1rem"
            case (Size.l):
                return "1.2rem"
            case (Size.xl):
                return "1.5rem"
        }

    }


    const sectionStyle = {
        backgroundColor: `rgba(0,0,0,0.4)`,
        backgroundImage: `url(${media})`,
        backgroundSize: `cover`,
        backgroundPosition: `top 10% center`,
        margin: margin(marginSize||Size.xs)
    }

    return (
        <section style={sectionStyle} className={'hero'}>
            <h1 className={"hero-section-title"}>{title}</h1>
            <h2 className={"hero-section-subtitle"}>{subtitle}</h2>
            <ButtonLink shadow={true} label={buttonText} to={urlDestination} buttonColor={buttonColor.info} buttonSize={Size.m}/>
        </section>
    )
}

export default HeroSection