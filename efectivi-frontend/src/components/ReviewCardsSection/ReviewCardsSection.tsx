import { reviewCardProps, reviewCardsSectionProps } from "../../interfaces/reviewCardsProps"
import { Size } from "../../utils/enums";
import ReviewCard from "../ReviewCard/ReviewCard";
import './ReviewCardsSection.css'

const ReviewCardsSection: React.FC<reviewCardsSectionProps> = (props:reviewCardsSectionProps) => {
  
    const title: string = props.title;
    
    const cards: reviewCardProps[] = props.cards;
    const marginSize:(Size|undefined) = props.marginSize;

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
        margin: margin(marginSize||Size.m)
    }
    return (
    <section style={sectionStyle} className={"review-cards-section"}>
        <h1>{title}</h1>
        <div>
            {cards.map((card,index)=> <ReviewCard key={index} title={card.title} stars={card.stars} description={card.description} url={card.url}/>)}
        </div>
        <p>¿Quieres ver más? Pásate por nuestro perfil de <a href={'https://www.bodas.net/musica/efectiviwonders--e137295'}>bodas.net</a></p>
    </section>
  )
}

export default ReviewCardsSection