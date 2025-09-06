import React from 'react'
import HomeVideo from './homeVideo'

const HomeHeroText = () => {
    return (
        <div className='font-[font1] uppercase max-[1000px]:pt-[20vh] max-[600px]:pt-[35vh]'>
            <div className='text-center text-[9.5vw] leading-[10vw] flex items-center justify-center'>
                L'étincelle
            </div>
            <div className='text-center text-[9.5vw] leading-[10vw] flex items-center justify-center'>
                qui
                <div className='h-[8vw] object-cover w-[16vw] rounded-full overflow-hidden'><HomeVideo /></div>
                génère
            </div>
            <div className='text-center text-[9.5vw] leading-[10vw] flex items-center justify-center'>
                la créativité
            </div>
<p class="absolute lg:w-[17vw] w-[25vw] lg:right-5 right-0 min-w-[250px] max-[500px]:text-[0.5rem] lg:bottom-28 font-[font1]  text-xs lg:leading-relaxed leading-tight">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p><p></p>
        </div>
    )
}

export default HomeHeroText
