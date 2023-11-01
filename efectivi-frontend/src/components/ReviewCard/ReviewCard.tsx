import { reviewCardProps } from "../../interfaces/reviewCardsProps"

const ReviewCard: React.FC<reviewCardProps> = (props:reviewCardProps) => {
  
    const title:string = props.title;
    const stars:number = props.stars;
    const description: string = props.description;
    const url:string = props.url;
  
    return (
    <section>
        <div>
            
        </div>
        <h1>{title}</h1>

    </section>
  )
}

export default ReviewCard