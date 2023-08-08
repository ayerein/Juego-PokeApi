
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
                <button>Huir</button>
            </div>
        </section>
    )
}