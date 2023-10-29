
import { titleProps } from '../../interfaces/headerProps'
import './HeaderTitle.css'

const HeaderTitle = (props:titleProps) => {

    const title:string      = props.title
    const subtitle:string   = props.subtitle

  return (
    <div className={"logo-header"}>
        <img className={"logo"}
                src="./efectiviwonders-logo.webp"
                />
        <div className={"header-titles"}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    </div>
    
  )
}

export default HeaderTitle