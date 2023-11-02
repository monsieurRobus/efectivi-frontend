import { Size, buttonColor } from '../../utils/enums'
import ButtonLink from '../ButtonLink/ButtonLink'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  return (
    <footer>
      <section className={'footer-navigation'}>
        <div className={"columns logo-column"}>
          <img className={"logo"}
                src="./efectiviwonders-logo.webp"
                />
                <h1>Efectiviwonders</h1>
          </div>
        <div className={"columns"}></div>
        <div className={"columns social-icons"}>
          <div><FontAwesomeIcon icon={faFacebook} /></div>
          <div><FontAwesomeIcon icon={faInstagram} /></div>
          <div><FontAwesomeIcon icon={faTwitter} /></div>
          <div><FontAwesomeIcon icon={faEnvelope} /></div>
        </div>
        <div className={'columns'}>
          <nav className={'footer-nav'}>
            <ul >
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
      </section>
      <section className={'signature-container'}><span className={'signature'}>Made with 💖 and ☕ by Carlos Díaz</span></section>  
    </footer>
  )
}

export default Footer