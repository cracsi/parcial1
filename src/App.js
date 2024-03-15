import Vehiculos from './components/vehiculos'
import Formulario from './formulario';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.css';

function App() {
  return (
    
    <div className="App">
    <h1>Aqui va ek banner</h1>
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
