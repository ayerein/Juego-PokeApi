import { resetGameStorage } from "../logic/storage"
import { Link } from "react-router-dom"

export const FigthButtons = ({ getFigth, comments }) => {
    return(
        <section className="container-figth-control">
            <div className="figth-comments">
                {
                    comments.map(comment =>(
                        <p key={comment + Math.getRandomInt}>{comment}</p>
                    ))
                }
            </div>
            <div className="figth-buttons-container">
                <button onClick={getFigth} className="figth-buttons">Atacar</button>
                <Link to='/' onClick={resetGameStorage} className="figth-buttons">Huir</Link>
            </div>
        </section>
    )
}