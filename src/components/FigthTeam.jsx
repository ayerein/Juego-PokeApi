
export const FigthTeam = ({ team, selectPoke }) => {
    return(
        <div className="figth-team-container">
            {
                team.map(poke => (
                    <div key={poke.id} id={poke.id} onClick={()=>selectPoke(poke)} className="figth-team-pokes">
                        <img src={poke.img} alt={poke.name} className="figth-team-img" />
                        <p className="home-team-name">{poke.name}</p>
                    </div>
                ))
            }
        </div>
    )
}