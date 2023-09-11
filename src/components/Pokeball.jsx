import { Link } from "react-router-dom"

export const Pokeball = ({ handleClic }) => {
    return(
        <section className='container-pokeball'>
            <p className="title-pokeball">Presiona la pokeball para obtener un nuevo poke</p>
            <section className='pokeball'>
                <div className='pokeball-red'></div>
                <button type='button' className='pokeball-button' onClick={handleClic}></button>
                <div className='pokeball-white'></div>
            </section>
            <Link to="/" className="poke-back">Volver</Link>
        </section>
    )
}