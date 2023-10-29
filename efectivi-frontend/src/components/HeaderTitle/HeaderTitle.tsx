
import { titleProps } from '../../interfaces/headerProps'
import './HeaderTitle.css'

const HeaderTitle = (props:titleProps) => {

    const title:string      = props.title
    const subtitle:string   = props.subtitle

  return (
    <>
        <img className={"logo"}
                src=""
                />
        <div className={"headerTitles"}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
    </div>
    </>
    
  )
}

export default HeaderTitle