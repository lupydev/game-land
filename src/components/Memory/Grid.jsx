import React, { useContext } from 'react'
import { useEffect } from 'react';
import { MemoryContext } from '../../contexts/MemoryContext';
import Card from './Card';

export const Grid = ({dificultad}) => {
    const {cards, secondCard, pairCollected,setCards,checkForMatch} = useContext(MemoryContext);
    
    useEffect(() => {
       setCards(cards); 
    },  []);
 
    useEffect(() => {
       checkForMatch();
    }, [secondCard]);
 

   return(
    <div>
       <div className={`grid ${'grid'+dificultad}`}>
       { pairCollected === dificultad ? <p className='ganaste'>GANASTE</p> : 
         cards.map((card, index) => (
            <Card className={index} frontFace={card.src} number={index} name={card.character}/>
         ))
       }
       </div>
    </div>
  );
}