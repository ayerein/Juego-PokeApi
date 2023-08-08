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
            <div className="figth-buttons">
                <button onClick={getFigth}>Atacar</button>
                <Link to='/' onClick={resetGameStorage}>Huir</Link>
            </div>
        </section>
    )
}