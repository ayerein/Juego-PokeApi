import { Link } from "react-router-dom"
import { TeamHome } from "../container/TeamHome"
import { InitialPage } from "../components/InitialPage"

export const Home = () => {
    const storageTeam = window.localStorage.getItem('team')
    const team =  JSON.parse(storageTeam)
    return(
        
        team ?
        <div className="container-home">
            <section className="container-play-game">
                <Link to={`/figth`}>
                    <button>Combate</button>
                </Link>
            </section>
           <TeamHome team={ team } />
           {
            team.length === 3 ?
                <p className="full-team">Tu equipo esta lleno!</p>
            :
                <Link to="/newpoke">
                        <button>Nuevo pokemón</button>
                </Link>
           }
        </div>
        :
        <InitialPage />
    )
}