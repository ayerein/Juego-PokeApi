import { useEffect, useState } from "react"
import { FigthCard } from "../components/FigthCard"
import { FigthButtons } from "../components/FigthButtons"
import { FigthWinner } from "../components/FigthWinner"
import { saveGameToStorage } from "../logic/storage"

export const FigthScreen = ({ pokeSelected, enemyPoke }) => {
    const [ pokeHpInitial, setPokeHpInitial ] = useState(() => {
        const pokeHpFromStorage = window.localStorage.getItem('pokeHp')
        return pokeHpFromStorage ? pokeHpFromStorage : pokeSelected.hp
      })
    const [ enemyHpInitial, setEnemyHpInitial ] = useState(() => {
        const enemyHpFromStorage = window.localStorage.getItem('enemyHp')
        return enemyHpFromStorage ? enemyHpFromStorage : enemyPoke.hp
      })
    const [ comments, setComments ] = useState(['Para comenzar elije una acción.'])
    const [ winner, setWinner ] = useState()
    let newComment = []

    function getFigth(){
        if(pokeSelected.speed >= enemyPoke.speed){
            attack(pokeSelected, setEnemyHpInitial, enemyHpInitial)
            attack(enemyPoke, setPokeHpInitial, pokeHpInitial)
        } else {
            attack(enemyPoke, setPokeHpInitial, pokeHpInitial)
            attack(pokeSelected, setEnemyHpInitial, enemyHpInitial)
        }
    }

    function attack(poke, varSetHp, varLetHp){ 
        let pokeAttack = Math.floor(Math.random() * 3 / 10 * poke.attack)
        pokeAttack > 0 ?
        newComment.push(`${poke.name} atacó con ${pokeAttack} puntos de fuerza.`)
        : newComment.push(`El ataque de ${poke.name} falló.`)
        setComments(newComment)
        varSetHp(varLetHp - pokeAttack)
    } 

    useEffect(() => {
        saveGameToStorage({
            enemy: enemyPoke,
            enemyHp: JSON.parse(enemyHpInitial),
            poke: pokeSelected,
            pokeHp: JSON.parse(pokeHpInitial)
        })
        if (pokeHpInitial > 0 && enemyHpInitial > 0 ){
            return
        } else {
            pokeHpInitial <= 0 ? setWinner(enemyPoke) : setWinner(pokeSelected)
        }
    },[pokeHpInitial, enemyHpInitial])

    return(
        <div className="container-figth-screen">
            {
                winner ?
                <FigthWinner winner={winner}/>
                :
                <>
                <FigthCard poke={enemyPoke} hpInitial={enemyHpInitial} selected=''/>
                <FigthCard poke={pokeSelected} hpInitial={pokeHpInitial} selected='-selected'/>
                <FigthButtons getFigth={getFigth} comments={comments} />
                </>
            }
        </div>
    )
}