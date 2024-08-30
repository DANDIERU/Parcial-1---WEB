import { useState } from 'react'
import { DestinyCard } from './componentes/DestinyCard/DestinyCard'
import { FoodCard } from './componentes/FoodCard/FoodCard'
import { HotelCard } from './componentes/HotelCard/HotelCard'

import './App.css'

function App() {
  return (
    <>
    <section>
               
      <div className="main-container">
        <h1 className='main-title'>Despegar.net</h1>
        <h2 className='category-title'>Alimentación</h2>
        <div className='category-one'>          
          <FoodCard 
          image = "https://picsum.photos/200/300?random=1" 
          name = "Desayuno Continental"
          price = "10"
          >
          </FoodCard>

          <FoodCard 
          image = "https://picsum.photos/200/300?random=2" 
          name = "Media Pensión"
          price = "25"
          >
          </FoodCard>

          <FoodCard 
          image = "https://picsum.photos/200/300?random=3" 
          name = "Pensión Completa"
          price = "40"
          >
          </FoodCard>


        </div>
        <h2 className='category-title'>Hoteles</h2>
        <div className='category-two'>
          <HotelCard
          image = "https://picsum.photos/200/300?random=4"
          name = "Hotel Playa Dorada"
          price = "150"
          stars = "4"
          location = "Playa"
          services = "Wi-Fi -Desayuno incluido -Gimnasio"          
          >
          </HotelCard>

          <HotelCard
          image = "https://picsum.photos/200/300?random=5"
          name = "Hotel Mar Azul"
          price = "200"
          stars = "5"
          location = "Mar"
          services = "Spa - Piscina - Restaurante gourmet"          
          >
          </HotelCard>

          <HotelCard
          image = "https://picsum.photos/200/300?random=6"
          name = "Hotel Patagonia"
          price = "120"
          stars = "3"
          location = "Argentina"
          services = "Wi-Fi - Desayuno incluido"          
          >
          </HotelCard>

        </div>
        <h2 className='category-title'>Destinos día</h2>
        <div className='category-three'>
          
        </div>
      </div>
      
    </section>

    
    </>
  )
  
}

export default App
