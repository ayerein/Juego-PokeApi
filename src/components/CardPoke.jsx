import { Link, useParams } from "react-router-dom"
/* import { team } from "../logic/getTeam" */

export const CardPoke = ({ fact }) => {
    const { id } = useParams()
    const storageTeam = window.localStorage.getItem('team')
    const team =  JSON.parse(storageTeam)
    const poke = team && team.find((poke) => poke.id == id)
    !fact && (fact = poke)
    
    return(
        <>
        <section className="card-poke">
            <div className="card-poke-container">
                <p className="card-poke-name">{fact.name}</p>
                <img src={fact.img} alt={fact.name} className="card-poke-img" />
                <p className="card-poke-id">{fact.id}</p>
            </div>
            <div className="card-poke-container">
                <p className="card-poke-hp">Hp: {fact.hp}</p>
                <p className="card-poke-hp">Attack: {fact.attack}</p>
                <p className="card-poke-hp">Defense: {fact.defense}</p>
                <p className="card-poke-hp">Speed: {fact.speed}</p>
            </div>
        </section>
        <Link to="/">
            <button>Volver</button>
        </Link>
        </>
    )
}