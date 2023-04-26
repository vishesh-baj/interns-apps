import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Accordion, Card, Col } from 'react-bootstrap'
import image1 from './bg1.jpg';

const Api = () => {
    const [data, setData] = useState([])
    const [dataPost, setDataPost] = useState([])

    async function fetchData() {
        await axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setData(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }
    async function postData() {
        await axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                setDataPost(res.data);
            })
    }

    useEffect(() => {
        fetchData()
        postData()
    }, [])
    return (
        <>

            <div style={{ backgroundImage: `url(${image1})`, width: '100%', height: '100%', backgroundSize: 'contain' }}>
                <div className='container'>
                    <h1 style={{ textAlign: 'center' }}>User Data</h1>
                    <div className='row'>
                        {
                            data.map((item, index) => {
                                return (
                                    <>
                                        <Col lg={6} >
                                            <Card style={{ width: 'rem', fontWeight: 'bold', textAlign: 'center', fontSize: "20px", justifyItems: 'center', marginTop: "20px", border: '2px solid black', backgroundColor: '#faf6' }}>
                                                <Card.Body>
                                                    <Card.Title>{index}</Card.Title>
                                                    <span>Name :- {item.name}</span>
                                                    <span>{item.username}</span>
                                                    <p>Email :- {item.email}</p>
                                                    <p>Address :-{`${item.address.street},${item.address.suite},${item.address.city},${item.address.zipcode}`}</p>
                                                    <p>phone :- {item.phone}</p>
                                                    <p>website :- {item.website}</p>
                                                    <p>Comapny :- {`${item.company.name},${item.company.catchPhrase},${item.company.bs}`}</p>
                                                </Card.Body>
                                                <Accordion >
                                                    <Accordion.Header>User Post</Accordion.Header>
                                                    <Accordion.Body>
                                                        {
                                                         dataPost.map((post)=>{
                                                            return(
                                                                post.userId === item.id ? <p>{post.title}</p> : ""
                                                            )
                                                         })
                                                      }
                                                    </Accordion.Body>
                                                </Accordion>
                                            </Card>
                                        </Col>

                                    </>
                                )
                            })
                        }
                    </div>
                </div >
            </div>
        </>
    )
}

export default Api
