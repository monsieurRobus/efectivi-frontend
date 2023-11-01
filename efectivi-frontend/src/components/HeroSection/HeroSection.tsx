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

    const sectionStyle = {
        backgroundColor: `rgba(0,0,0,0.4)`,
        backgroundImage: `url(${media})`,
        backgroundSize: `cover`,
        backgroundPosition: `center center`
    }

    return (
        <section style={sectionStyle} className={'hero'}>
            <h1 className={"hero-section-title"}>{title}</h1>
            <h2 className={"hero-section-subtitle"}>{subtitle}</h2>
            <ButtonLink label={buttonText} to={urlDestination} buttonColor={buttonColor.info} buttonSize={Size.m}/>
        </section>
    )
}

export default HeroSection