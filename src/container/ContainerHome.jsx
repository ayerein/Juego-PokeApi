import { leaveSesion } from "../logic/sesion"
import { Link } from "react-router-dom"

export const ContainerHome = ({ team }) => {
    return(
        <div className="container-home">
            <p className="home-exit" onClick={() => leaveSesion()}>Cerrar Sesión</p>
            <p className="home-title">Este es tu equipo!</p>
            <section className="home-container-team">
                {
                    team.map(poke => (
                        <Link to={`/detail/${poke.id}`} key={poke.id} className="home-team-poke">
                                <img src={poke.img} alt={poke.name} className="home-team-img" />
                                <p className="home-team-cup">&#127942;{poke.cup}</p>
                                <p className="home-team-name">{poke.name}</p>
                        </Link>
                    ))
                }
            </section>
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
    )
}