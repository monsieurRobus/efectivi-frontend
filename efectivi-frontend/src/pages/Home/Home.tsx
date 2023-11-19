import { useEffect, useState } from 'react';
import CardsSection from '../../components/CardsSection/CardsSection';
import DescriptionSection from '../../components/DescriptionSection/DescriptionSection';
import HeroSection from '../../components/HeroSection/HeroSection';
import ReviewCardsSection from '../../components/ReviewCardsSection/ReviewCardsSection';
import { Size } from '../../utils/enums';

import './Home.css';
import { httpGet } from '../../utils/httpCalls';
import Footer from '../../components/Footer/Footer';


const Home = () => {
  const [reviews, setReviews] = useState([]);
  console.log(reviews)
  useEffect(()=>{

    httpGet('reviews').then(res=> setReviews(res.data));

  },[]);

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
      <ReviewCardsSection
        title={'Esto es lo que dicen de nosotros:'}
        cards={reviews}
        />
      <HeroSection 
      
        title={'Somos tu festival'}
        subtitle={'Queremos veros bailar sin descanso'}
        buttonText={'Haz tu presupuesto'}
        urlDestination={'https://www.google.com'}
        media={'../../../public/efectiviwonders-section.webp'}
      />
    <Footer />
    </main>
  )
}

export default Home