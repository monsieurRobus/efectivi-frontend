import { ReviewCardProps } from "../../interfaces/reviewCardsProps"

const ReviewCard: React.FC<ReviewCardProps> = (props:ReviewCardProps) => {
  
    const id:number = props.id;
    const attributes:ReviewCardProps["attributes"] = props.attributes;

  
    return (
    <section>
        <div>
            
        </div>
        <h1><a href={attributes.url}>{attributes.Title}</a></h1>
        <div> 
          <h2>{attributes.ClientName} - {attributes.Fecha?.toString()} </h2>
        </div>
        <blockquote>{attributes.Description[0].children[0].text}</blockquote>

    </section>
  )
}

export default ReviewCard