import { descriptionSectionProps } from "../../interfaces/descriptionSectionProps"
import { Size } from "../../utils/enums";
import './DescriptionSection.css'

const DescriptionSection:React.FC<descriptionSectionProps>= (props:descriptionSectionProps) => {
    const title:string = props.title;
    const body:string[] = props.body;
    const media:string = props.media;
    const size:(Size|undefined) = props.size;
    const marginSize:(Size|undefined) = props.margin;
    const inverseDirection:(boolean|undefined) = props.inverseDirection;

    
    const marginStyles = (size:Size):string => {

        switch (size)
        {
            case (Size.xs):
                return " margin-none"
            case (Size.s):
                return " margin-small"
            case (Size.m):
                return " margin-medium"
            case (Size.l):
                return " margin-large"
            case (Size.xl):
                return " margin-extralarge"
        }

    }

    const styles = (size:Size):string => {

        switch (size)
        {
            case (Size.xs):
                return "section-extrasmall section-description"
            case (Size.s):
                return "section-small section-description"
            case (Size.m):
                return "section-medium section-description"
            case (Size.l):
                return "section-large section-description"
            case (Size.xl):
                return "section-extralarge section-description"
        }

    }
    
    const inverseStyles = inverseDirection ? " inverse-direction" : ""

    const sectionStyles = styles(size||Size.m) + inverseStyles + marginStyles(marginSize||Size.xs)


  return (
    <section className={sectionStyles}>
        <img src={media} />
        <div className="section-description-content">
            <h1>{title}</h1>
            { body.map((element,index) => <p key={index}>{element}</p>) }
        </div>
        
    </section>
  )
}

export default DescriptionSection