
export const FightTeam = ({ team, selectPoke }) => {
    return(
        <div className="fight-team-container">
            {
                team.map(poke => (
                    <div key={poke.id} id={poke.id} onClick={()=>selectPoke(poke)} className={"fight-team-pokes"}>
                        <img src={poke.img} alt={poke.name} className="fight-team-img" />
                        <p className="home-team-cup">&#127942;{poke.cup}</p>
                        <p className="home-team-name">{poke.name}</p>
                    </div>
                ))
            }
        </div>
    )
}