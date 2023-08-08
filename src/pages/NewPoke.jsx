import { useState } from "react"
import { getRandomPoke } from "../logic/getRandomPoke"
import { Pokeball } from "../components/Pokeball"
import { CardPoke } from "../components/CardPoke"

export const NewPoke = () => {
    const storageTeam = window.localStorage.getItem('team')
    const team =  JSON.parse(storageTeam)
    const [ newPoke, setNewPoke ] = useState()
    let newTeam = team ? team : []

    const handleClic = async (event) => {
      event.currentTarget.disabled = true;
      const getPoke = await getRandomPoke()
      setNewPoke(getPoke)
      newTeam.push(getPoke)
      window.localStorage.setItem('team', JSON.stringify(newTeam))
      }

    return(
            newPoke ?
            <>
            <h2>Felicidades {newPoke.name} es tu nuevo compañero!</h2>
            <CardPoke fact={newPoke} />
            </>
            :
            <Pokeball handleClic={handleClic} />
          
    )
}