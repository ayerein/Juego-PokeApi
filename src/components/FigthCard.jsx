
export const FigthCard = ({ poke, hpInitial, selected }) => {
    return(
    <div className={`figth-card${selected}`}>
        <div className="container-figth-card">
            <p className="figth-card-name">{poke.name}</p>
            <progress className="figth-card-progress" max={poke.hp} value={hpInitial}/>
            <p className="figth-card-hp">hp: {Math.floor(hpInitial)} / {poke.hp}</p>
        </div>
        <img src={poke.img} alt={poke.name} className="figth-card-img"/>
    </div>
    )
}