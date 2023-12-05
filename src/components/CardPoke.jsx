import { useParams } from "react-router-dom"
import { getPokeId, getTeam } from "../logic/storage"
import { useEffect, useState } from "react"
import { CardPokeDetail } from "./CardPokeDetail"
import { Loading } from "./Loading"

export const CardPoke = ({ fact }) => {
    const [ poke, setPoke ] = useState(fact)
    const { id } = useParams()

    useEffect(() => {
        async function getPoke(){
        const newPokeFilter = await getPokeId(id)
        setPoke(newPokeFilter)
        }
        !fact && getPoke()
    }, [])
    
    return(
        
            poke ?
            <>
            <CardPokeDetail id={id} poke={poke}/>
            </>
            :
            <Loading />
        
    )
}