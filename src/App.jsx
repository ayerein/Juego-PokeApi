import { useEffect, useState } from 'react'
import './App.css'
import { getRandomPoke } from './logic/getRandomPoke'
import { CardPoke } from './components/cardPoke'
import { PreviousPokes } from './components/PreviousPokes'

let previousPoke = []

function App() {
  const [ fact, setFact ] = useState()

  useEffect(() => {
    getRandomPoke().then(setFact)
  },[])
 
  const handleClic = async () => {
    setFact()
    previousPoke.push(fact)
    const newFact = await getRandomPoke()
    setFact(newFact)
  }

  return(
    <main>
    <section className='select-poke'>
      { 
      fact ?
        <CardPoke fact={fact} handleClic={handleClic} /> 
      :
        <img src="/loading.gif" alt="loading" className='loading' />
      }
      <button type="button" className='button-random' onClick={handleClic}>Random</button>
    </section>
    
    {
      previousPoke &&
      <PreviousPokes previousPoke={previousPoke} />
    }
    
    </main>
  )
  
}

export default App
