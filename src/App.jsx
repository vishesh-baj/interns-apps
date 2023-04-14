import "./App.css"
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from "react-bootstrap";

function App() {
  const[formData,setFormData]=useState({})
  const handleChange = (e) =>{
    setFormData(
      {...formData,[e.target.name]:e.target.value}
    )
  }
  const handleSubmit =async  (e) =>{
    e.preventDefault();
    console.log(formData);
    const isValid = await userSchema.isValid(formData)
    if(!isValid){
      alert("please enter password grater then 4 letter or number")
    }else{
      alert("login successfully")
    }
  }
    return (
    <>

      <div className='container'>
        <h1 id="lg">Login Form</h1>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="label">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="label">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3">
          </Form.Group>
          <Button variant="success" type="submit">
            Log in
          </Button>
        </Form>
      </div>
    </>
  )
}


export default App;
