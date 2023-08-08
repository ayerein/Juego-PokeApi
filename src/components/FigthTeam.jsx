
export const FigthTeam = ({ team, selectPoke }) => {
    return(
        <div className="figth-pokes">
            <p>Para comenzar selecciona un poke.</p>
            {
                team.map(poke => (
                    <div key={poke.id} id={poke.id} onClick={()=>selectPoke(poke)}>
                        <img src={poke.img} alt={poke.name} className="home-team-img" />
                    </div>
                ))
            }
        </div>
    )
}