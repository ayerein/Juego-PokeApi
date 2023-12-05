import { Link } from "react-router-dom"
import { FightTeam } from "../components/Fight/FightTeam"
import { FightScreen } from "./FightScreen"
import { useEffect, useState } from "react"
import { getRandomPoke } from "../logic/getRandomPoke"
import { getCurrentEnemy, getCurrentPoke, saveCurrentGame } from "../logic/fight"
import { Loading } from "../components/Loading"

export const ContainerFight = ({ team }) => {
    const [ pokeSelected, setPokeSelected ] = useState()
    const [ enemyPoke, setEnemyPoke ] = useState('loading')

    useEffect(() => {
        async function getCurrentFight () {
            const currentPoke = await getCurrentPoke()
            const currentEnemy = await getCurrentEnemy()
            currentPoke && setPokeSelected(currentPoke)
            setEnemyPoke(currentEnemy)
        }
        getCurrentFight()
    },[])
      
    const selectPoke = (poke) => {
        pokeSelected && document.getElementById(pokeSelected.id).classList.remove('poke-selected')
        document.getElementById(poke.id).classList.add('poke-selected')
        setPokeSelected(poke)
    }

    const starFight = async() => {
        const getPoke = await getRandomPoke()
        pokeSelected && setEnemyPoke(getPoke)
    }

    const RenderLoading = () => {
        if(enemyPoke === 'loading') return <Loading />
        if(enemyPoke) return <FightScreen pokeSelected={pokeSelected} enemyPoke={enemyPoke} />
        if(!enemyPoke) return(
            <section className="fight-container">
                <p className="fight-team-title">Para comenzar selecciona un poke.</p>
                <FightTeam team={team} selectPoke={selectPoke} />
                <div className="fight-team-button-container">
                    <button onClick={starFight} className="fight-team-button">Continuar</button>
                    <Link to="/" className="fight-team-button">Volver</Link>
                </div>
            </section>
        ) 
    }

    return(
        <div className="container-fight-home">
            <RenderLoading />
        </div>
    )
}