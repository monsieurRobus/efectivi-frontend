import './HeaderNav.css'
const HeaderNav = () => {
  return (
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
          <li><button>Quiero mi presupuesto</button></li>
        </ul>
    </nav>
  )
}

export default HeaderNav