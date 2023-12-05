import { Link } from "react-router-dom"
import { deletePokeId } from "../logic/storage"

export const CardPokeDetail = ({ id, poke }) => {
    return(
        <div className="container-card-poke">
            {
                !id && <p className="title-new-poke">Felicidades {poke.name} es tu nuevo compañero!</p>
            }
            <section className="card-poke">
                <div className="card-poke-container">
                    <p className="card-poke-name">{poke.name}</p>
                    <p className="card-poke-cup">&#127942;{poke.cup}</p>
                    <img src={poke.img} alt={poke.name} className="card-poke-img" />
                    <p className="card-poke-id">{poke.number}</p>
                </div>
                <div className="card-poke-container-stats">
                    <p className="card-poke-stats">Hp: {poke.hp}</p>
                    <p className="card-poke-stats">Ataque: {poke.attack}</p>
                    <p className="card-poke-stats">Defensa: {poke.defense}</p>
                    <p className="card-poke-stats">Velocidad: {poke.speed}</p>
                </div>
            </section>
            <section className="card-buttons">
                {
                    id && <Link to='/' onClick={()=>deletePokeId(id)} className="card-drop-poke"> Liberar Poke </Link>
                }
                <Link to="/" className="card-poke-button-volver">{ id ? 'Volver' : 'Continuar' }</Link>
            </section>
        </div>
    )
}