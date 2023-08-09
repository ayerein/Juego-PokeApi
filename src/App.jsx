import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home'
import { CardPoke } from './components/cardPoke';
import { Figth } from './pages/Figth';
import { NewPoke } from './pages/NewPoke';

function App() {
  return(
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/detail/:id" element={<CardPoke />}/>
          <Route path="/figth" element={<Figth />} />
          <Route path="/newpoke" element={<NewPoke />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
