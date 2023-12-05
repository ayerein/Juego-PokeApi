import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home'
import { CardPoke } from './components/CardPoke';
import { Fight } from './pages/Fight';
import { NewPoke } from './pages/NewPoke';


function App() {
  return(
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/detail/:id" element={<CardPoke />}/>
          <Route path="/figth" element={<Fight />} />
          <Route path="/newpoke" element={<NewPoke />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
