import { getFirestore, doc, getDoc, setDoc, getDocs, collection, deleteDoc } from 'firebase/firestore'
import { appFirebase, auth } from '../../firebase/config'

const db = getFirestore(appFirebase)

export const savePoke = async ( newPoke ) => {
    const email = auth.currentUser.email
    const docuRef = doc(db, `Users/${email}/Team/${newPoke.id}`)
    await setDoc(docuRef,newPoke)
}
export const getTeam = async () => {
    const email = auth.currentUser.email
    const docuRef = collection(db, `Users/${email}/Team`)
    const data = await getDocs(docuRef)
    const team = []
    data.forEach((doc) => {
        team.push(doc.data())
    });
    return(team)
}

export const getPokeId = async (id) => {
    const email = auth.currentUser.email
    const docRef = doc(db, `Users/${email}/Team/${id}`)
    const docSnap = await getDoc(docRef);
    return(docSnap.data())
}

export const deletePokeId = async (id) => {
    const email = auth.currentUser.email
    const docRef = doc(db, `Users/${email}/Team/${id}`)
    const docSnap = await deleteDoc (docRef);
}