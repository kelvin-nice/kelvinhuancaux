
/* import './App.css' */
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar';
import Home from './pages/Home'
import Portafolio from './pages/Portafolio'
import SobreMi from './pages/SobreMi'
import Interbank from './pages/Interbank';
import ItHub from './pages/ItHub';
import DesignSystemInterbank from './pages/DesignSystemInterbank';
import Footer from './componentes/Footer';
import UniContinental from './pages/UniContinental';


function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sobre-mi' element={ <SobreMi/> } />
        <Route path='/portafolio' element={ <Portafolio/> } />
        <Route path='/interbank' element={ <Interbank/> }  />
        <Route path='/it-hub' element={ <ItHub/> } />
        <Route path='/design-system' element={ <DesignSystemInterbank/> } />
        <Route path='/universidad-continental' element={ <UniContinental/> } />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
