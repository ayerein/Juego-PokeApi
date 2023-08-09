import { Link } from "react-router-dom"
import { TeamHome } from "../container/TeamHome"
import { InitialPage } from "../components/InitialPage"
import { getTeam } from "../logic/getTeam"

export const Home = () => {
    const team = getTeam()
    return(    
        team && team.length>0 ?
        <div className="container-home">
            <p className="home-title">Este es tu equipo!</p>
            <TeamHome team={ team } />

            <section className="container-button-new-poke">
                <Link to={`/figth`} className="home-button-figth">Combate</Link>
            {
               team.length === 3 ?
               <p className="full-team">Tu equipo esta lleno!</p>
               :
               <Link to="/newpoke" className="home-button-new-poke"> Nuevo pokemón </Link>
            }
            </section>
        </div>
        :
        <InitialPage />
    )
}