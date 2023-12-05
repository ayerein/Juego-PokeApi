import { deleteDoc, doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'
import { appFirebase, auth } from '../../firebase/config'

const db = getFirestore(appFirebase)

export const saveCurrentGame = async ( enemy, enemyHp, poke, pokeHp ) => {
    const email = auth.currentUser.email
    const hpEnemy = { hp: enemyHp }
    const hpPoke = { hp: pokeHp }
    await setDoc(doc(db, `Users/${email}/CurrentGame/enemy`),enemy)
    await setDoc(doc(db, `Users/${email}/CurrentGame/enemyHp`),hpEnemy)
    await setDoc(doc(db, `Users/${email}/CurrentGame/poke`),poke)
    await setDoc(doc(db, `Users/${email}/CurrentGame/pokeHp`),hpPoke)
}

export const getCurrentPoke = async () => {
    const email = auth.currentUser.email
    const docRef = doc(db, `Users/${email}/CurrentGame/poke`)
    const docSnap = await getDoc(docRef);
    return(docSnap && docSnap.data())
}

export const getCurrentPokeHp = async () => {
    const email = auth.currentUser.email
    const docRef = doc(db, `Users/${email}/CurrentGame/pokeHp`)
    const docSnap = await getDoc(docRef);
    return(docSnap && docSnap.data())
}

export const getCurrentEnemyHp = async () => {
    const email = auth.currentUser.email
    const docRef = doc(db, `Users/${email}/CurrentGame/enemyHp`)
    const docSnap = await getDoc(docRef);
    return(docSnap && docSnap.data())
}

export const getCurrentEnemy = async () => {
    const email = auth.currentUser.email
    const docRef = doc(db, `Users/${email}/CurrentGame/enemy`)
    const docSnap = await getDoc(docRef);
    return(docSnap && docSnap.data())
}

export const resetGame = async () => {
    const email = auth.currentUser.email
    await deleteDoc(doc(db, `Users/${email}/CurrentGame/enemy`))
    await deleteDoc(doc(db, `Users/${email}/CurrentGame/enemyHp`))
    await deleteDoc(doc(db, `Users/${email}/CurrentGame/poke`))
    await deleteDoc(doc(db, `Users/${email}/CurrentGame/pokeHp`))
}

export const updateCup = async (poke) =>{
    poke.cup = poke.cup + 1
    const email = auth.currentUser.email
    const docuRef = doc(db, `Users/${email}/Team/${poke.id}`)
    await setDoc(docuRef,poke)
}
