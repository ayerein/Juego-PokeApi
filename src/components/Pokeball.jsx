
export const Pokeball = ({ handleClic }) => {
    return(
        <section className='pokeball'>
            <div className='pokeball-red'></div>
            <button type='button' className='pokeball-button' onClick={handleClic}></button>
            <div className='pokeball-white'></div>
        </section>
    )
}