import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap'
import { FormattedMessage } from 'react-intl';
import Vehiculo from "./vehiculo";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";




function Vehiculos() {

  const [vehiculos, setVehiculos] = useState([]);
  const [vehiculoDetallado, setVehiculoDetallado] = useState([]);
  const [vehiculoSeleccionado, setVehiculoSeleccionado] = useState(0);

  useEffect(()=> {
    
    fetch('http://localhost:3001/cars')
        .then(response => response.json())
        .then(data => {
            setVehiculos(data);
        });
  },[]);
  useEffect(()=> {
    
    fetch('http://localhost:3001/cars/'+vehiculoSeleccionado)
        .then(response => response.json())
        .then(data => {
          setVehiculoDetallado(data);
        });
  },[vehiculoSeleccionado]);

  function mostrarDetalle()
  {
    if(vehiculoSeleccionado!==0)
    {
    return (
<div className="contenedorDetalle cont" >
     <body>
<div class="container mt-5">
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div class="card">
        <div class="card-header">
          {vehiculoDetallado.marca +"      "+ vehiculoDetallado.referencia}
        </div>
        <Image className="banner" src={vehiculoDetallado.imagen} alt="banner"/>

        <div class="card-body">
          <p class="card-text">{'-> '}<FormattedMessage id='Kilometraje'/>: {vehiculoDetallado.kilometraje}</p>
          <p class="card-text">{'-> '}<FormattedMessage id='Color'/>: {vehiculoDetallado.color}</p>
          <p class="card-text">{'-> '}<FormattedMessage id='Referencia'/>: {vehiculoDetallado.referencia}</p>
        </div>
      </div>
    </div>
  </div>
</div>

</body>

   

   </div>
    )}
  }

  function clickHandler(id){
    console.log(id);
    setVehiculoSeleccionado(id);
    console.log(vehiculoDetallado);
  }

return (
  <div className="conetenedorPrincipalLista">
  <div className="contenedorTabla cont">

<table className="tabla">
  <thead className="tablaHead">
    <tr >
      <th className="texto">#</th>
      <th className="texto"><FormattedMessage id='Marca'/></th>
      <th className="texto"><FormattedMessage id='Línea'/></th>
      <th className="texto"><FormattedMessage id='Modelo'/></th>
    </tr>
  </thead>
  <tbody>
  { vehiculos.map((vehi) => (
    <tr className="clickableRow" key={vehi.id} onClick={() => clickHandler(vehi.id)}>
        <td className="id texto"><span className="contentSpan"><strong>{vehi.id}</strong></span></td>
        <td className="marca texto"><span className="contentSpan">{ vehi.marca }</span></td>
        <td className="linea texto"><span className="contentSpan">{ vehi.linea }</span></td>
        <td className="texto"><span className="contentSpan">{ vehi.modelo }</span></td>
    </tr>
)) }
  </tbody>
</table>
</div>
    {mostrarDetalle()}
   </div>
   
 );
       
}

export default Vehiculos;