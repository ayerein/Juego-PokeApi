import { useState } from "react"
import { singIn, singUp } from "../../logic/sesion"

export const Login = () => {
    const [ login, setLogin ] = useState(true)

    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()

    return(
        <form className="container-login">
            <p className="title-login">{login ? 'Iniciar Sesión' : 'Registrarse'}</p>{/* 
            <p className={!login ? "tittle-login login-select" : "tittle-login"} onClick={() => setLogin(false)}>Sing Up</p> */}

            <input className='input-login' type="email" name="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} />
            <input className='input-login' type="password" name="password" placeholder="Contraseña" onChange={(e)=> setPassword(e.target.value)} />

            <p className="p-login" onClick={() => setLogin(!login)}>{login ? 'Quiero registrarme' : 'Ya tengo una cuenta'}</p>

            {
            login ?
            <button type="button" className='btn-login' onClick={()=> singIn(email, password)}>Iniciar Sesion</button>
            :
            <button type="button" className='btn-login' onClick={()=> singUp(email, password)}>Crear Cuenta</button>
            }
        </form>
    )
}