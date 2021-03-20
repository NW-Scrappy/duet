import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import React, { useState, useEffect } from "react";
import axios from "axios";

const SignInForm = () => {
  const [User, setUser] = useState("");
  const [Pw, setPw] = useState("");

  // const handleChange = (e) => {
  //   console.log("successful insert");
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:5000/api/loginuser", {
  //       User: User,
  //       Pw: Pw,
  //     })
  //     .then((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div>
      <Jumbotron fluid className="jumbotron">
        <Container>
          <p
            style={{
              color: " #0DCAF0",
              fontSize: "45px",
              textAlign: "center",
              textShadow: "3px 3px 3px orange",
            }}
          >
            Duet User Login
          </p>
        </Container>
      </Jumbotron>

      <Form className="UserForm" action="/loginuser" method="POST">
        <Form.Group
          onChange={(e) => {
            setUser(e.target.value);
            console.log(e.target.value);
          }}
          controlId="formBasicEmail"
        >
          <Form.Label>User Name</Form.Label>
          <Form.Control type="email" placeholder="Enter username" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <br></br>
        <Form.Group
          onChange={(e) => {
            setPw(e.target.value);
            console.log(e.target.value);
          }}
          controlId="formBasicPassword"
        >
          <Form.Label>User Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <br></br>
        <Form.Group
          onChange={(e) => {
            setPw(e.target.value);
            console.log(e.target.value);
          }}
          controlId="formBasicPassword"
        >
          <Form.Label> Confirm User Password</Form.Label>
          <Form.Control type="password" placeholder="re-enter password" />
        </Form.Group>

        <Button
          href="/dashboard"
          className="UserBtn"
          variant="primary"
          type="submit"
        >
          User Sign-in
        </Button>
        <br></br>
        <br></br>
        <Button
          href="/newuser"
          className="UserBtn"
          variant="primary"
          type="submit"
        // onClick={handleChange}
        >
          No Account? Register Now
        </Button>
      </Form>
    </div>
  );
};

export default SignInForm;
