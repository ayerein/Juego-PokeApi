import { Link } from "react-router-dom"
import { resetGame } from "../../logic/fight"

export const FightButtons = ({ getFight, comments }) => {
    return(
        <section className="container-fight-control">
            <div className="fight-comments">
                {
                    comments.map(comment =>(
                        <p key={comment + Math.getRandomInt}>{comment}</p>
                    ))
                }
            </div>
            <div className="fight-buttons-container">
                <button onClick={getFight} className="fight-buttons">Atacar</button>
                <Link to='/' onClick={resetGame} className="fight-buttons">Huir</Link>
            </div>
        </section>
    )
}