import { Link, useParams } from "react-router-dom"
import { getTeam } from "../logic/getTeam"

export const CardPoke = ({ fact }) => {
    const team = getTeam()
    const { id } = useParams()
    const poke = team && team.find((poke) => poke.id == id)
    !fact && (fact = poke)

    function dropPoke(){
        const newTeam = team.filter((pk) => pk.id !== poke.id)
        window.localStorage.setItem('team', JSON.stringify(newTeam))
    }
    
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
            {
                id && <Link to='/' onClick={dropPoke}> Liberar Poke </Link>
            }
        </section>
        <Link to="/"> Volver </Link>
        </>
    )
}