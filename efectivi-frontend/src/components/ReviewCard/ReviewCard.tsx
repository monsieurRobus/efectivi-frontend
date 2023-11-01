import { reviewCardProps } from "../../interfaces/reviewCardsProps"
import './ReviewCard.css'
const ReviewCard: React.FC<reviewCardProps> = (props:reviewCardProps) => {
  
    const title:string = props.title;
    const description: string = props.description;
    const url:string = props.url;
    const author:string = props.author;
  
    return (
    <figure className={'card'}>
        <div className={"review-stars"}>
            ⭐⭐⭐⭐⭐
        </div>
        <a href={url}><h1>{title}</h1></a>
        <p>{description}</p>
        <h3>{author}</h3>

    </figure>
  )
}

export default ReviewCard