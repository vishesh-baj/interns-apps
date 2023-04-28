import axios from "axios";
import React, { useEffect, useState } from "react";
import { Accordion, Card, Col } from "react-bootstrap";
import image1 from "./bg1.jpg";

const Api = () => {
  const [data, setData] = useState([]);
  const [dataPost, setDataPost] = useState([]);
  const [dataComment, setDataComment] = useState([]);

  async function fetchData() {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async function postData() {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setDataPost(res.data);
      });
  }
  async function commentData() {
    await axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setDataComment(res.data);
      });
  }

  useEffect(() => {
    fetchData();
    postData();
    commentData();
  }, []);
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${image1})`,
          width: "100%",
          height: "100%",
          backgroundSize: "contain",
        }}
      >
        <div className="container">
          <h1 style={{ textAlign: "center" }}>User Data</h1>
          <div className="row">
            {data.map((user, index) => {
              return (
                <>
                  <Col lg={6}>
                    <Card
                      style={{
                        width: "rem",
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: "20px",
                        justifyItems: "center",
                        marginTop: "20px",
                        border: "2px solid black",
                        backgroundColor: "#faf6",
                      }}
                    >
                      <Card.Body>
                        <Card.Title>{index}</Card.Title>
                        <span>Name :- {user.name}</span>
                        <span>{user.username}</span>
                        <p>Email :- {user.email}</p>
                        <p>
                          Address :-
                          {`${user.address.street},${user.address.suite},${user.address.city},${user.address.zipcode}`}
                        </p>
                        <p>phone :- {user.phone}</p>
                        <p>website :- {user.website}</p>
                        <p>
                          Comapny :-{" "}
                          {`${user.company.name},${user.company.catchPhrase},${user.company.bs}`}
                        </p>
                      </Card.Body>
                      <Accordion>
                        <Accordion.Header>User Post</Accordion.Header>
                        <Accordion.Body>
                                      {dataPost.map((post,index) => {
                                          if (post.userId === user.id) {
                                              return (
                                                  <Accordion>
                                                      <h3>{index}{ ". "}{post?.title}</h3>
                                                  <Accordion.Header>User Comment</Accordion.Header>
                                                  <Accordion.Body>
                                                      {dataComment.map((comment,index) => {
                                                          if (comment.postId === post.id) {
                                                              return <p>{comment.name}</p>;
                                                          } else {
                                                              return "";
                                                          }
                                                      })}
                                                  </Accordion.Body>
                                              </Accordion>
                                          )
                                      }
                              else{
                                  return " "         
                              }
                          })}
                        </Accordion.Body>
                      </Accordion>
                    </Card>
                  </Col>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Api;
