// import "./App.css"
// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, Form } from "react-bootstrap";
// import {useState} from "react";
// import * as yup from 'yup';
// import {userSchema} from './Validations/UserValidation';


// function App() {
//   const[formData,setFormData]=useState({})
//   const handleChange = (e) =>{
//     setFormData(
//       {...formData,[e.target.name]:e.target.value}
//     )
//   }
//   const handleSubmit =async  (e) =>{
//     e.preventDefault();
//     console.log(formData);
//     const isValid = await userSchema.isValid(formData)
//     if(!isValid){
//       alert("please enter password grater then 4 letter or number")
//     }else{
//       alert("login successfully")
//     }
//   }
//     return (
//     <>

//       <div className='container'>
//         <h1 id="lg">Login Form</h1>
        
//         <Form onSubmit={handleSubmit}>
//           <Form.Group className="mb-3">
//             <Form.Label className="label">Email address</Form.Label>
//             <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label className="label">Password</Form.Label>
//             <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange}/>
//           </Form.Group>
//           <Form.Group className="mb-3">
//           </Form.Group>
//           <Button variant="success" type="submit">
//             Log in
//           </Button>
//         </Form>
       
//       </div>
//     </>
//   )
// }


// export default App;




// //------------------------------------------------------------------------------------------------//
// import React, { useState } from 'react'
// //import { useEffect } from 'react'
// import { Button,Container,Row } from 'react-bootstrap'

// // const Task = () => {
// //     const[second,setSecond]=useState(0)
// //     const[minute,setMinute]=useState(0)

// //     var timer;
// //     useEffect(()=>{
// //           timer =setInterval(()=>{
// //               setSecond(second+1)
// //                if(second===59){
// //                 setMinute(minute+1)
// //                 setSecond(0)
// //                }
// //           },1000)

// //     return()=>clearInterval(timer)
// //     },[])
   
// //     const start=()=>{
        
// //     }
// //     const end=()=>{
        
// //     }
//     const obj = [
//         {
//           taskId: "1",
//           taskDescription: "make coffee",
//           taskTimer: null,
//         },
//         {
//           taskId: "2",
//           taskDescription: "take bath",
//           taskTimer: "3:34",
//         },
//         {
//           taskId: "3",
//           taskDescription: "code",
//           taskTimer: null,
//         },
//         {
//           taskId: "4",
//           taskDescription: "go out with friends",
//           taskTimer: "4:31",
//         },
//         {
//           taskId: "5",
//           taskDescription: "take a nap",
//           taskTimer: null,
//         },
//       ];
    
//   return (
   
     
//         {/* <div className='timer'>
//             <div className='container'>
//                 <div className='timer-container'>
//                     <h1>Timer</h1>
//                     <h1>
//                         {minute<10?'0'+minute:minute}:{second<10?"0"+second:second}
//                     </h1>
//                     <Button className='btn btn-primary' onClick={start}>Start</Button>
//                     <Button className='btn btn-secondary' onClick={End}>Stop</Button>
//                 </div>
//             </div>
//         </div> */}
//        <Container>
        
//         <Container>
//             <Row>
//                 {
//                     obj.map((item,index)=>{
//                         return(
//                             <ul key={index}>
//                                <li>{item.taskId}</li>
//                                <li>{item.taskDescription}</li>
//                                <li>{item.taskTimer}</li>
//                             </ul>
//                         )
//                     })
//                 }
//             </Row> 
//        </Container>
      

//   )


// export default Task