import { useState } from "react"
import { getRandomPoke } from "../logic/getRandomPoke"
import { FigthScreen } from "../container/FigthScreen"
import { getTeam } from "../logic/getTeam"
import { FigthTeam } from "../components/FigthTeam"

export const Figth = () => {
    const [ pokeSelected, setPokeSelected ] = useState(() => {
        const pokeFromStorage = window.localStorage.getItem('poke')
        return pokeFromStorage && JSON.parse(pokeFromStorage)
      })
    const [ enemyPoke, setEnemyPoke ] = useState(() => {
        const enemyFromStorage = window.localStorage.getItem('enemy')
        return enemyFromStorage && JSON.parse(enemyFromStorage)
      })
    const team = getTeam()

    const selectPoke = (poke) => {
        pokeSelected && document.getElementById(pokeSelected.id).classList.remove('poke-selected')
        setPokeSelected(poke)
        document.getElementById(poke.id).classList.add('poke-selected')
    }

    const starFigth = async() => {
        const getPoke = await getRandomPoke()
        setEnemyPoke(getPoke)
    }
    
    return(
        <div className="container-figth-home">
        {
            enemyPoke ?
            <FigthScreen pokeSelected={pokeSelected} enemyPoke={enemyPoke} />
            :
            <section className="figth-container">
                <p className="figth-team-title">Para comenzar selecciona un poke.</p>
                <FigthTeam team={team} selectPoke={selectPoke}/>
                <div className="figth-team-button-container">
                    {
                        pokeSelected &&
                        <button onClick={starFigth} className="figth-team-button">Continuar</button>
                    }
                </div>
            </section>
        }
        </div>
    )
}