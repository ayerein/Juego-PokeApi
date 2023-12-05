import { useEffect, useState } from "react"
import { FightCard } from "../components/Fight/FightCard"
import { FightButtons } from "../components/Fight/FightButtons"
import { FightWinner } from "../components/Fight/FightWinner"
import { getCurrentEnemyHp, getCurrentPokeHp, saveCurrentGame, updateCup } from "../logic/fight"
import { Loading } from "../components/Loading"

export const FightScreen = ({ pokeSelected, enemyPoke }) => {
    const [ pokeHpInitial, setPokeHpInitial ] = useState('loading')
    const [ enemyHpInitial, setEnemyHpInitial ] = useState('loading')
    const [ comments, setComments ] = useState(['Para comenzar elije una acción.'])
    const [ winner, setWinner ] = useState()
    let newComment = []

    function getFight(){
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

    useEffect(()=> {
        pokeSelected === winner && updateCup(pokeSelected)
    },[winner])
    
    useEffect(()=> {
        async function getCurrentFight () {
            const currentPokeHp = await getCurrentPokeHp()
            const currentEnemyHp = await getCurrentEnemyHp()
            if( currentPokeHp && currentEnemyHp ){
                setPokeHpInitial(currentPokeHp.hp)
                setEnemyHpInitial(currentEnemyHp.hp)
            } else {
                setPokeHpInitial(pokeSelected.hp)
                setEnemyHpInitial(enemyPoke.hp)
            }
        }
        getCurrentFight()
    },[])

    useEffect(() => {
        saveCurrentGame(enemyPoke, enemyHpInitial, pokeSelected, pokeHpInitial)
        if (pokeHpInitial > 0 && enemyHpInitial > 0 ){
            return
        } else {
            pokeHpInitial <= 0 && setWinner(enemyPoke) 
            enemyHpInitial<= 0 && setWinner(pokeSelected)
        }
    },[pokeHpInitial, enemyHpInitial])

    const RenderLoading = () => {
        if(winner) return <FightWinner winner={winner}/>
        if(enemyHpInitial === 'loading' || pokeHpInitial === 'loading' ) {
            return(<Loading />)
        }
        if(enemyHpInitial != 'loading' & pokeHpInitial != 'loading' ) {
            return(
                <>
                <div className="container-cards">
                    <FightCard poke={enemyPoke} hpInitial={enemyHpInitial} selected=''/>
                    <FightCard poke={pokeSelected} hpInitial={pokeHpInitial} selected='-selected'/>
                </div>
                <FightButtons getFight={getFight} comments={comments} />
                </>
            )
        }
    }

    return(
        <div className="container-fight-screen">
            <RenderLoading />
        </div>
    )
}