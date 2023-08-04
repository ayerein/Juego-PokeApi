export const CardPoke = ({ fact }) => {
    return(
        <section className="card-poke">
            <p>{fact.name}</p>
            <img src={fact.sprites.front_default} alt={fact.name} />
            <p>hp: {fact.stats[0].base_stat}</p>
        </section>
    )
}