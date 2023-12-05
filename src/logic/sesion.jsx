import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../firebase/config'

export const singIn = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log('Correo o contraseña incorrectos', error)
    }
}
export const singUp = async (email, password) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log('El email o la contraseña no son validos.', error)
    }
}
export const leaveSesion = async () => {
    try {
        await signOut(auth)
    } catch (error) {
        console.log(error)
    }
}