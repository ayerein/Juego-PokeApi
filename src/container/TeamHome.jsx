import { Link } from "react-router-dom"

export const TeamHome = ({ team }) => {
    return(
        <section className="home-container-team">
            {
                team.map(poke => (
                    <Link to={`/detail/${poke.id}`} key={poke.id} className="home-team-poke">
                            <img src={poke.img} alt={poke.name} className="home-team-img" />
                            <p className="home-team-name">{poke.name}</p>
                    </Link>
                ))
            }
        </section>
    )
}