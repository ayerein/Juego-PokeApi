import { resetGameStorage } from "../logic/storage"
import { Link } from "react-router-dom"

export const FigthWinner = ({ winner }) => {
    resetGameStorage()
    return(
        <>
            <p>El ganador es: {winner.name}</p>
            <img src={winner.img} alt={winner.name} />
            <Link to='/'>Volver al inicio</Link>
        </>
    )
}