import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'

const Task = () => {
    const obj = [
        {
          taskId: "1",
          taskDescription: "make coffee",
          taskTimer: null,
        },
        {
          taskId: "2",
          taskDescription: "take bath",
          taskTimer: "3:34",
        },
        {
          taskId: "3",
          taskDescription: "code",
          taskTimer: null,
        },
        {
          taskId: "4",
          taskDescription: "go out with friends",
          taskTimer: "4:31",
        },
        {
          taskId: "5",
          taskDescription: "take a nap",
          taskTimer: null,
        },
      ];
  const[task,setTask]=useState('') 

  return (
    <div>
        <Container>
        <h1>Task Manager</h1>
        </Container>
        <Container>
            <Row>
                {
                     obj.map((item,index)=>{
                        return(
                            <ul key={index}>
                               <li>{item.taskId}</li>
                               <li>{item.taskDescription}</li>
                               <li>{item.taskTimer}</li>
                            </ul>
                        )
                    })
                }
            </Row>
        </Container>
       
    </div>
  )
}

export default Task