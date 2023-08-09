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
        <div className="container-card-poke">
            {
                !id && <p className="title-new-poke">Felicidades {fact.name} es tu nuevo compañero!</p>
            }
            <p className="card-poke-name">{fact.name}</p>
            <section className="card-poke">
                <div className="card-poke-container">
                    <img src={fact.img} alt={fact.name} className="card-poke-img" />
                    <p className="card-poke-id">{fact.id}</p>
                </div>
                <div className="card-poke-container">
                    <p className="card-poke-stats">Hp: {fact.hp}</p>
                    <p className="card-poke-stats">Attack: {fact.attack}</p>
                    <p className="card-poke-stats">Defense: {fact.defense}</p>
                    <p className="card-poke-stats">Speed: {fact.speed}</p>
                </div>
            </section>
            <section className="card-buttons">
                {
                    id && <Link to='/' onClick={dropPoke} className="card-drop-poke"> Liberar Poke </Link>
                }
                <Link to="/" className="card-poke-button-volver"> Volver </Link>
            </section>
        </div>
    )
}