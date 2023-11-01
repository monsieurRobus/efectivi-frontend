import { cardDescription } from "../../interfaces/cardsSectionProps"
import './CardDescription.css'


const CardDescription: React.FC<cardDescription> = (props:cardDescription) => {
    const icon:string = props.icon
    const title:string = props.title
    const description:string = props.description
  return (
    <figure className={"card-description"}>
        <span>{icon}</span>
        <h2>{title}</h2>
        <p>{description}</p>
        

    </figure>
  )
}

export default CardDescription