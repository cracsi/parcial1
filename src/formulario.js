import './App.css';
import { useState } from 'react';
import { useNavigate,useParams} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormattedMessage } from 'react-intl';




function Formulario() {

    const [formValues, setFormValues] = useState({email:"", password:""})
    const [validationStates, setValidationStates] = useState({email:"", password:""})
    const navigate=useNavigate();

    


    const handleUserChange = ((e) => {
        setFormValues({...formValues, email: e.target.value})
      });
     
      const handlePasswordChange = ((e) => {
        setFormValues({...formValues, password: e.target.value})
      });
     
      function handleClickIngresar()
      {
        fetch("http://localhost:3001/login", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({"login": formValues.email, "password": formValues.password})
          }).then(response => response.json())
            .then(data => {
              validacion(data);
            })
        
      }

function validacion(valores)
{
  const usuario=valores.email
  const contra=valores.password
  
  if (!(valores.status=="error"))
  {
    setValidationStates({email:"true",password:"true"})
    navigate("/vehiculos");
  }
  else
  {
    setValidationStates({email:"false",password:"false"})
  }
 
}

function error()
{
  
  if (validationStates.email==="false" || validationStates.password==="false")
  {
    
    

    return (    <h className="txtError"><FormattedMessage id='Error'/></h>
    )
  }
}

return (
    <div>

     <h2><FormattedMessage id='Inicio de Sesión'/></h2>
    
     <Form>
     <Form.Group className="formUsuario" controlId="formUsuario">
       <Form.Label className="formLabel1"><FormattedMessage id='Nombre de usuario'/></Form.Label>
       <div><Form.Control 
       className="inp"
       value={formValues.username} 
                  onChange={handleUserChange}
                  type="username" 
                  /></div>
        </Form.Group>

        <Form.Group className="formContrasena" controlId="formConstrasena">
       <Form.Label className="formLabel"><FormattedMessage id='Contraseña'/></Form.Label>
       <div>
       <Form.Control 
       className="inp"
       value={formValues.password} 
       type="password"
       onChange={handlePasswordChange}
       
        />
        </div>
        </Form.Group>
        <div className="formButtons">
        <Button className="botonIngresar" variant="primary" onClick={handleClickIngresar}>
        <FormattedMessage id='Ingresar'/> 
     </Button>
     <Button className="botonCancelar"variant="primary">
     <FormattedMessage id='Cancelar'/>
     </Button>
        </div>
     
   </Form>
   {error()}
   </div>
   
  );
}
export default Formulario;