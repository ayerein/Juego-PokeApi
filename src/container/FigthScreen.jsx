import { useEffect, useState } from "react"
import { FigthCard } from "../components/FigthCard"
import { FigthButtons } from "../components/FigthButtons"

export const FigthScreen = ({ pokeSelected, enemyPoke }) => {
    const [ pokeHpInitial, setPokeHpInitial ] = useState(pokeSelected.hp)
    const [ enemyHpInitial, setEnemyHpInitial ] = useState(enemyPoke.hp)
    const [ comments, setComments ] = useState(['Para comenzar elije una acción.'])
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
    useEffect(() => {
        if (pokeHpInitial > 0 && enemyHpInitial > 0 ){
            return
        } else {
            pokeHpInitial <= 0 ? console.log(`Gana ${enemyPoke.name}`) : console.log(`Gana ${pokeSelected.name}`)
        }
    },[pokeHpInitial, enemyHpInitial])

    function attack(poke, varSetHp, varLetHp){ 
        let pokeAttack = Math.floor(Math.random() * 3) / 10 * poke.attack
        pokeAttack > 0 ?
        newComment.push(`${poke.name} atacó con ${pokeAttack} puntos de fuerza.`)
        : newComment.push(`El ataque de ${poke.name} falló.`)
        setComments(newComment)
        varSetHp(varLetHp - pokeAttack)
    } 

    return(
        <div className="container-figth-screen">
            <FigthCard poke={enemyPoke} hpInitial={enemyHpInitial} selected=''/>
            <FigthCard poke={pokeSelected} hpInitial={pokeHpInitial} selected='-selected'/>
            <FigthButtons getFigth={getFigth} comments={comments} />
        </div>
    )
}