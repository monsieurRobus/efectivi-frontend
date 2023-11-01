import CardsSection from '../../components/CardsSection/CardsSection'
import DescriptionSection from '../../components/DescriptionSection/DescriptionSection'
import HeroSection from '../../components/HeroSection/HeroSection'
import { Size } from '../../utils/enums'

import './Home.css'
const Home = () => {
  return (
    <main>
      <HeroSection 
      
        title={'Somos tu festival'}
        subtitle={'Queremos verte bailar sin descanso'}
        buttonText={'Haz tu presupuesto'}
        urlDestination={'https://www.google.com'}
        media={'/efectiviwonders-section.webp'}
      />
      <DescriptionSection
        title={'Haz de tu fiesta un día inolvidable'}
        body={['Está claro que ','allalalala','pepepepep', 'sisisisi']}
        media={'/efectiviwonders-section.webp'}
        size={Size.m}
        margin={Size.xs}
        inverseDirection={false}
      />
      <CardsSection cards={[
        {
          icon:"test",
          title:"Hola",
          description:"molamos mucho"
        },
        {
          icon:"test",
          title:"Hola",
          description:"molamos mucho"
        },
        {
          icon:"test",
          title:"Hola",
          description:"molamos mucho"
        },
        {
          icon:"test",
          title:"Hola",
          description:"molamos mucho"
        },
        {
          icon:"test",
          title:"Hola",
          description:"molamos mucho"
        },
        {
          icon:"test",
          title:"Hola",
          description:"molamos mucho"
        }
      ]}/>
      <DescriptionSection
        title={'Haz de tu fiesta un día inolvidable'}
        body={['Está claro que ','allalalala','pepepepep', 'sisisisi']}
        media={'/efectiviwonders-section.webp'}
        size={Size.m}
        margin={Size.xs}
        inverseDirection={true}
      />
      <HeroSection 
      
        title={'Somos tu festival'}
        subtitle={'Queremos veros bailar sin descanso'}
        buttonText={'Haz tu presupuesto'}
        urlDestination={'https://www.google.com'}
        media={'../../../public/efectiviwonders-section.webp'}
      />
      <HeroSection 
      
        title={'Somos tu festival'}
        subtitle={'Queremos veros bailar sin descanso'}
        buttonText={'Haz tu presupuesto'}
        urlDestination={'https://www.google.com'}
        media={'../../../public/efectiviwonders-section.webp'}
      />

    </main>
  )
}

export default Home