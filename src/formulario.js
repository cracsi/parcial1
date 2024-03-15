import './App.css';
import { useState } from 'react';
import { useNavigate,useParams} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




function Formulario() {

    const [formValues, setFormValues] = useState({email:"", password:"", favClass:"1"})
    const [validationStates, setValidationStates] = useState({email:"", password:""})
    const navigate=useNavigate();

    const clickSubmit = (() => {
        //Call fetch
        alert(JSON.stringify(formValues))
      })


    const handleEmailChange = ((e) => {
        setFormValues({...formValues, email: e.target.value})
      });
     
      const handlePasswordChange = ((e) => {
        setFormValues({...formValues, password: e.target.value})
      });
     
      function handleClickIngresar()
      {
        navigate("/vehiculos")
      }


return (
    <div>

     <h2>Inicio de Sesión</h2>
    
     <Form>
     <Form.Group className="mb-6" controlId="formBasicEmail">
       <Form.Label>Email address</Form.Label>
       <Form.Control type="email" placeholder="Enter email"/>
       <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label>Password</Form.Label>
       <Form.Control type="password" placeholder="Password" />
       <Form.Text className="text-muted">Your password should be have numbers and letters and should be at least 9 char long</Form.Text>
     </Form.Group>
     <Button variant="primary" onClick={handleClickIngresar}>
       ingresar 
     </Button>
     <Button variant="primary">
       cancelar
     </Button>
   </Form>
   </div>
  );
}
export default Formulario;