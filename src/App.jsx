import "./App.css"
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from "react-bootstrap";

function App() {
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
