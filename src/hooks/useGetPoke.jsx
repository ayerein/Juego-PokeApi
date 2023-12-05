import { getTeam } from "../logic/storage"
import { useEffect, useState } from "react"

export function useGetPoke(){
    const [ team, setTeam ] = useState('loading')

    useEffect(()=>{
        async function teamPoke(){
            const searchPoke = await getTeam()
            setTeam(searchPoke)
        }
        teamPoke()
    } , [])

    return{team}
}