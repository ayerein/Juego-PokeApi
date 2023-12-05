import { Link } from "react-router-dom"

export const FirstPoke = () => {
    return(
        <div className="container-initial-page">
            <p className="text-initial-page">Hola! Vemos que no tienes ningun pokemón.</p>
            <p className="text-initial-page">Para poder jugar debes tener al menos un pokemón de compañero.</p>
            <Link to="/newpoke" className="button-first-poke">Quiero mi primer poke</Link>
        </div>
    )
}