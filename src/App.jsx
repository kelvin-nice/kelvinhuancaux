
/* import './App.css' */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar';
import Home from './pages/Home'
import Portafolio from './pages/Portafolio'
import SobreMi from './pages/SobreMi'

function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sobre-mi' element={ <SobreMi/> } />
        <Route path='/portafolio' element={ <Portafolio/> } />
      </Routes>
    </Router>
  )
}

export default App
