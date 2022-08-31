import { MemoryProvider } from '../../contexts/MemoryContext';
import NewGame from "./NewGame";

export const Memory = () => {
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
