import { resetGameStorage } from "../logic/storage"
import { Link } from "react-router-dom"

export const FigthWinner = ({ winner }) => {
    resetGameStorage()
    return(
        <div className="winner-container">
            <p className="winner-title">El ganador es: {winner.name}</p>
            <img src={winner.img} alt={winner.name} className="winner-img" />
            <Link to='/' className="winner-button-back">Volver al inicio</Link>
        </div>
    )
}