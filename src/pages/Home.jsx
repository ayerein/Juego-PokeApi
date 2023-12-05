import { useEffect, useState } from "react"
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "../firebase/config"

import { TeamHome } from "../container/TeamHome"
import { InitialPage } from "../components/InitialPage"
import { Loading } from "../components/Loading"


export const Home = () => {
    const [ user, setUser ] = useState('loading')

    useEffect(()=> {
        onAuthStateChanged(auth, (userFirebase) => { userFirebase ? setUser(userFirebase) : setUser(null)})
    },[])

    const RenderLoading = () => {
        if(user === 'loading') return <Loading />
        if(user) return <TeamHome />
        if(!user) return <InitialPage /> 
    }
    return(
        <RenderLoading />
    )
}