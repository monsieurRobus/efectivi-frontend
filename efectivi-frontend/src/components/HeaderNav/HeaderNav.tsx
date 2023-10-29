import { buttonColor, Size } from '../../utils/enums'
import ButtonLink from '../ButtonLink/ButtonLink'
import './HeaderNav.css'
const HeaderNav = () => {
  return (
    <div className={"nav-container"}>
        <input className="checkbox-menu" type="checkbox" name="" id="" />
        <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
        </div>  
        <nav>
            <ul>
            <li>Quienes somos</li>
            <li>Repertorio</li>
            <li className={'submenu-container'}>Servicios
                <ul className={'submenu'}>
                    <li>💍Bodas</li>
                    <li>🥳Fiestas privadas</li>
                    <li>💼Eventos empresariales</li>
                </ul>
                </li>
            <li>EfectiviJukebox</li>
            <li>Calendario</li>
            <li>Contacto</li>
            <li>
                <ButtonLink 
                    shadow={true} 
                    label={'Quiero mi presupuesto'} 
                    buttonColor={buttonColor.info} 
                    to={'https://www.google.com'} 
                    buttonSize={Size.s}
                />
            </li>
            </ul>
        </nav>
    </div>

  )
}

export default HeaderNav