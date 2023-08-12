import { Link } from "react-router-dom"

export const InitialPage = () => {
    return(
        <div className="container-initial-page">
            <p className="text-initial-page">Hola! vemos que esta es tu primera vez en el juego.</p>
            <p className="text-initial-page">Para poder jugar debes tener al menos un pokemón de compañero.</p>
            <Link to="/newpoke" className="button-first-poke">Quiero mi primer poke</Link>
        </div>
    )
}