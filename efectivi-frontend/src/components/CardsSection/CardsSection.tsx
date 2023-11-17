import { cardDescription, cardSectionProps } from "../../interfaces/cardsSectionProps"
import CardDescription from "../CardDescription/CardDescription"
import './CardsSection.css'
const CardsSection: React.FC<cardSectionProps> = (props:cardSectionProps) => {
    const cards: cardDescription[] = props.cards
  return (
    <section className={"card-section"}>
        {cards.map((card,index)=>
            <CardDescription key={index} icon={card.icon} title={card.title} description={card.description}/>
        )}
    </section>
  )
}

export default CardsSection