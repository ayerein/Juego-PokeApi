import { Link } from "react-router-dom"
import { resetGame } from "../../logic/fight"

export const FightWinner = ({ winner }) => {
    
    resetGame()
    return(
        <div className="winner-container">
            <div className="winner-filter">
                <p className="winner-title">El ganador es: {winner.name}</p>
                <img src={winner.img} alt={winner.name} className="winner-img" />
                <Link to='/' className="winner-button-back">Volver al inicio</Link>
            </div>
        </div>
    )
}