import { Link } from "react-router-dom"

export const InitialPage = () => {
    return(
        <div className="">
            <p>Hola vemos que esta es tu primera vez en el juego.</p>
            <Link to="/newpoke">
                <button>Quiero mi primer pokemón</button>
            </Link>
        </div>
    )
}