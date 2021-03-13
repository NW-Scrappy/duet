import React from "react"
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import "../App.css"

const SearchForm = () => {
return (
    <div>
    <Jumbotron fluid className="jumbotron">
   <Container>
       <h1>Start Your Search</h1>
       <p>
           This is a modified jumbotron that occupies the entire horizontal space of
           its parent.
   </p>
   </Container>
</Jumbotron>

     <Form className="UserForm">
       <Form.Group controlId="formBasicEmail">
         <Form.Label>Search for a Band/Musician</Form.Label>
         <Form.Control type="email" placeholder="Enter username" />
         <Form.Text className="text-muted">
           Who do you want to fight with?
   </Form.Text>
       </Form.Group>
         <br></br>
       <Form.Group controlId="formBasicPassword">
         <Form.Label>What genre of fighting?</Form.Label>
         <Form.Control type="password" placeholder="Password" />
       </Form.Group>
       <br></br>
       <Form.Group controlId="formBasicPassword">
         <Form.Label> Fight location?</Form.Label>
         <Form.Control type="password" placeholder="re-enter password" />
       </Form.Group>
 
       <Button className="UserBtn" variant="primary" type="submit">
         Submit
 </Button>
     </Form>

   </div> 
)
}

export default SearchForm;