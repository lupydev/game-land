import { createContext, useState } from 'react';
import {images} from '../components/Memory/CardImages';

export const MemoryContext = createContext();

export const MemoryProvider = ({children}) => {
   const [ready, setReady] = useState(false);
   const [dificultad, setDificultad] = useState(0);
   const [cards, setCards] = useState([]);
   const [firstCard, setFirstCard] = useState({});
   const [secondCard, setSecondCard] = useState({});
   const [unflippedCards, setUnflippedCards] = useState([]);
   const [disabledCards, setDisabledCards] = useState([]);
   const [pairCollected, setPairCollected] = useState(0);

   const resetGame = () => {
    setReady(false);
    setDificultad(0);
    setCards([]);
    setUnflippedCards([]);
    setDisabledCards([]);
    setPairCollected(0);
    document.getElementById("memory-dificult").classList.remove("buttons-hide")
    document.getElementById("play").classList.remove("buttons-hide")
   }

   const setupGame = (dificultad) => {
    const imagesCopy = images.filter(item => item.id < dificultad + 1);
    const shuffleArray = a => {
       for (let i = a.length - 1; i > 0; i--){
          const j = Math.floor(Math.random() * (i+1));
          [a[i],a[j]] = [a[j],a[i]];
       }
       return a;
    }
    const cardList = shuffleArray([...imagesCopy, ...imagesCopy])
    setCards(cardList);
    setReady(true);
    document.getElementById("memory-dificult").classList.add("buttons-hide")
    document.getElementById("play").classList.add("buttons-hide")
   }


   const flipCard = (name, number) => {
    if (firstCard.name === name && firstCard.number === number) {
      return 0;
    }
    if (!firstCard.name) {
      setFirstCard({ name, number });
    }
    else if (!secondCard.name) {
      setSecondCard({ name, number });
    }
    return 1;
  }
  
  const checkForMatch = () => {
    if (firstCard.name && secondCard.name) {
      const match = firstCard.name === secondCard.name;
      match ? disableCards() : unflipCards();
    }

  }

  const disableCards = () => {
    setDisabledCards([firstCard.number, secondCard.number]);
    resetCards();                       
    setTimeout(() => setPairCollected(pairCollected + 1), 700);
  };

  const unflipCards = () => {
    setUnflippedCards([firstCard.number, secondCard.number]);
    resetCards();
  };

  const resetCards = () => {
    setFirstCard({});
    setSecondCard({});
  }



  const data = {
    dificultad,
    cards,
    secondCard,
    firstCard,
    unflippedCards,
    ready,
    disabledCards,
    pairCollected,
    setDificultad,
    setCards,
    checkForMatch,
    disableCards,
    unflipCards,
    resetCards,
    setupGame, 
    resetGame,
    flipCard
  }
  return <MemoryContext.Provider value={data}>{children}</MemoryContext.Provider>
}