import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import "../App.css"
import axios from "axios";
import Col from "react-bootstrap/Col"


const SearchForm = () => {


const [dbLabel, setdbLabel] = useState("")
const [instrument, setInstrument] = useState("")

const handleChange = (e) => {
    console.log("successful search") 
    e.preventDefault()
    axios
    .get("http://localhost:5000/api/" + dbLabel + "/" + instrument).then((error) => {
        console.log(error);
    })   
}    

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


       <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Instrument Playing</Form.Label>
                        <Form.Control onChange={(e) => {
                            console.log(e.target.value)
                            setInstrument(e.target.value)
                        }}

                            as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                          

                            <option value="bands">Search For Bands</option>
                            <option value="musicians">Search for Musicians</option>
                           

                        </Form.Control>


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
 
       <Button variant="primary" type="submit" onClick={handleChange}> 
         Submit
 </Button>
     </Form>

   </div> 
)
}

export default SearchForm;