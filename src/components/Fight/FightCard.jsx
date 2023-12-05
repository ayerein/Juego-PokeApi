
export const FightCard = ({ poke, hpInitial, selected }) => {
    return(
    <div className={`fight-card${selected}`}>
        <div className="container-fight-card">
            <p className="fight-card-name">{poke.name}</p>
            <progress className="fight-card-progress" max={poke.hp} value={hpInitial}/>
            <p className="fight-card-hp">hp: {Math.floor(hpInitial)} / {poke.hp}</p>
        </div>
        <img src={poke.img} alt={poke.name} className="fight-card-img"/>
    </div>
    )
}