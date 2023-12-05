import { useState } from "react";
import { getRandomPoke } from "../logic/getRandomPoke";
import { savePoke } from "../logic/storage";
import { CardPoke } from "../components/CardPoke";
import { Pokeball } from "../components/Pokeball";


export const ContainerNewPoke = () => {
    const [ newPoke, setNewPoke ] = useState()

    const handleClic = async (event) => {
        event.currentTarget.disabled = true;
        const getPoke = await getRandomPoke()
        savePoke(getPoke)
        setNewPoke(getPoke) 
    }

    return(
        newPoke ?
          <>
          <CardPoke fact={newPoke} />
          </>
          :
          <Pokeball handleClic={handleClic} />
    )
}