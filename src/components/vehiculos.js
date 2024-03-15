import Vehiculo from "./vehiculo";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";




function Vehiculos() {

return (
   <div className="container">
     <h2>Tabla de Vehículos</h2>

<table>
  <thead>
    <tr >
      <th>#</th>
      <th>Marca</th>
      <th>Línea</th>
      <th>Modelo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Ford</td>
      <td>Fiesta</td>
      <td>2022</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Chevrolet</td>
      <td>Spark</td>
      <td>2023</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Toyota</td>
      <td>Corolla</td>
      <td>2021</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Honda</td>
      <td>Civic</td>
      <td>2024</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Volkswagen</td>
      <td>Jetta</td>
      <td>2022</td>
    </tr>
  </tbody>
</table>
<Vehiculo  />
   </div>
   
 );
       
}

export default Vehiculos;