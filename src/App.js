import Vehiculos from './components/vehiculos'
import Formulario from './formulario';
import banner from './image 1 1.png';
import { Image } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.css';

function App() {
  return (
    
    <div className="App">
    <div className="App-header">
    <h1 className="bannerTitle">TuSegundazo.com</h1>
    <Image className="banner" src={banner} alt="banner"/>
    </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Formulario />} />
        <Route path="/vehiculos/" element={<Vehiculos />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
