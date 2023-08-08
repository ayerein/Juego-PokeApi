import { useState } from "react"
import { getRandomPoke } from "../logic/getRandomPoke"
import { FigthScreen } from "../container/FigthScreen"

export const Figth = () => {
    const [ pokeSelected, setPokeSelected ] = useState()
    const [ enemyPoke, setEnemyPoke ] = useState()
    const storageTeam = window.localStorage.getItem('team')
    const team =  JSON.parse(storageTeam)

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
        <>
        {
            enemyPoke ?
            <FigthScreen pokeSelected={pokeSelected} enemyPoke={enemyPoke} />
            :
            <section className="figth-container">
            <p>Para comenzar selecciona un poke.</p>
            <div className="figth-pokes">
                {
                    team.map(poke => (
                        <div key={poke.id} id={poke.id} onClick={()=>selectPoke(poke)}>
                            <img src={poke.img} alt={poke.name} className="home-team-img" />
                        </div>
                    ))
                }
            </div>
            {
                pokeSelected && <button onClick={starFigth}>Continuar</button>
            }
            </section>
        }
            </>
    )
}