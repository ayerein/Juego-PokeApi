
export const PreviousPokes = ({ previousPoke }) => {
    return(
        <section className="previous-pokes">
            {
                previousPoke.map(poke => (
                    <div key={poke.id} className="team-poke">
                        <img src={poke.sprites.front_default} alt="" />
                        <p>{poke.name}</p>
                        <p>hp: {poke.stats[0].base_stat}</p>
                    </div>    
                ))
            }
        </section>
    )
}