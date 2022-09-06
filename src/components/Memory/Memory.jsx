import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { MemoryProvider } from '../../contexts/MemoryContext';
import NewGame from "./NewGame";

export const Memory = () => {
   const {promedio, getRanking} = useContext(GlobalContext)
   getRanking("memories")

   return(
    <div>
       <MemoryProvider>
         <NewGame> 
         </NewGame>
       </MemoryProvider>
    </div>
   )
}

export default Memory;
