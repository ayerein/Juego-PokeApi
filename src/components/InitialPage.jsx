import { Login } from "./Login/Login"

export const InitialPage = () => {
    return(
        <div className="container-initial-page">
            <p className="text-initial-page">Hola bienvenidx! Para poder jugar debes iniciar con tu cuenta.</p>
            <Login />
        </div>
    )
}