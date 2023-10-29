import HeaderNav from '../HeaderNav/HeaderNav'
import HeaderTitle from '../HeaderTitle/HeaderTitle'
import './Header.css'

const Header = () => {
  return (
    <header>
      <HeaderTitle 
        title={'Efectiviwonders'}
        subtitle={'Somos tu festival'}/>
      <HeaderNav/>
    </header>
  )
}

export default Header