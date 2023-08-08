import { Link } from "react-router-dom"
import { TeamHome } from "../container/TeamHome"
import { InitialPage } from "../components/InitialPage"
import { getTeam } from "../logic/getTeam"

export const Home = () => {
    const team = getTeam()
    return(    
        team.length > 0 ?
        <div className="container-home">
            <section className="container-play-game">
                <Link to={`/figth`}>Combate</Link>
            </section>
           <TeamHome team={ team } />
           {
            team.length === 3 ?
                <p className="full-team">Tu equipo esta lleno!</p>
            :
                <Link to="/newpoke"> Nuevo pokemón </Link>
           }
        </div>
        :
        <InitialPage />
    )
}