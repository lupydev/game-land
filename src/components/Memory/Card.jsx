import { useContext, useEffect, useState } from "react"
import { MemoryContext } from "../../contexts/MemoryContext";


const Card = ({frontFace, number, name}) => {
    const {flipCard,unflippedCards,disabledCards} = useContext(MemoryContext);

    const [isFlipped, setIsFlipped] = useState(false);
    const [isCorrect,setIsCorrect] = useState("")

    useEffect(() => {
        if (unflippedCards.includes(number)) {
          setIsCorrect("-wrong")
          setTimeout(() => {setIsFlipped(false); setIsCorrect("")}, 700); //No son iguales, se voltean las dos en 0.7s
        }
      }, [unflippedCards])
    
    useEffect(() => {
        if (disabledCards.includes(number)) {
          setIsCorrect("-correct")
        }        
    }, [disabledCards])
  
    const handleClick = e => {
        const value = flipCard(name, number); 
        if (value !== 0 && !isFlipped) {
        setIsFlipped(true);
        }  
    }
    

    return (
        <div className={`card ${'card' + isCorrect} `}>
            {
                isFlipped 
                ? (<img className='card-image' src={frontFace} alt='front-face' />)
                : (
                   <img className='card-image-back' src={frontFace} alt='back-face' onClick={handleClick}/>
                  )
            }
        </div>
    )
}
export default Card;
//