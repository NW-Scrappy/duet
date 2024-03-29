import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "../App.css";

const NewUserForm = () => {
  const [UserName, setNewUser] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setUserPw] = useState("");

  const handleChange = (e) => {
    console.log("successful insert");
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/register", {
        UserName: UserName,
        Email: Email,
        Password: Password,
      })

      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Jumbotron fluid className="jumbotron">
        <Container>
          <h1
            style={{
              color: " #0DCAF0",
              fontSize: "45px",
              textAlign: "center",
              textShadow: "3px 3px 3px orange",
            }}
          >
            Duet New User Sign-Up
          </h1>
        </Container>
      </Jumbotron>

      <Form className="UserForm" action="/register" method="POST">
        <Form.Group
          onChange={(e) => {
            setNewUser(e.target.value);
            console.log(e.target.value);
          }}
          value="<%= typeof name != 'undefined' ? name : '' %>"
          controlId="formBasicEmail"
        >
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <br></br>
        <Form.Group
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(e.target.value);
          }}
          value="<%= typeof name != 'undefined' ? name : '' %>"
          controlId="formBasicEmail"
        >
          <Form.Label>User Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <br></br>
        <Form.Group
          onChange={(e) => {
            setUserPw(e.target.value);
            console.log(e.target.value);
          }}
          value="<%= typeof name != 'undefined' ? name : '' %>"
          controlId="formBasicPassword"
        >
          <Form.Label>User Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <br></br>
        <Form.Group
          onChange={(e) => {
            setUserPw(e.target.value);
            console.log(e.target.value);
          }}
          value="<%= typeof name != 'undefined' ? name : '' %>"
          controlId="formBasicPassword"
        >
          <Form.Label> Confirm User Password</Form.Label>
          <Form.Control type="password" placeholder="re-enter password" />
        </Form.Group>

        <Button
          className="UserBtn"
          href="/dashboard"
          variant="primary"
          type="submit"
          onClick={handleChange}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default NewUserForm;
