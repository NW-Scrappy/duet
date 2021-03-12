import React, { useState, useEffect } from "react";
import "../App.css"
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/Col"
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import axios from "axios";


const PostForm = () => {
    const [bandName, setBandName] = useState("")
    const [instrument, setInstrument] = useState("")

    const [genre, setGenre] = useState("")
    const [location, setLocation] = useState("")

    const handleChange = () => {
        axios
            .post("http://localhost:5000/api/insert", {
                bandName: bandName,
                instrument: instrument,
                genre: genre,
            })
            .then(() => {
                alert("successful insert");
            });
    };
    



    return (
        <div>
            <Jumbotron fluid className="jumbotron">
                <Container>
                    <h1>Band Seeking Musician</h1>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
    </p>
                </Container>
            </Jumbotron>
            <Form className="UserForm">
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Band Name</Form.Label>
                        <Form.Control type="text"
                            placeholder="Band Name"
                            // value={bandName.firstName}
                            onChange={(e) => {
                                console.log(e.target.value)
                                setBandName(e.target.value)
                            }}
                                
                        />
                       <br></br>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Instrument Seeking</Form.Label>
                        <Form.Control onChange={(e) => {
                            console.log(e.target.value)
                            setInstrument(e.target.value)
                        }}
                        
                            as="select" defaultValue="Choose...">
                            <option>Choose...</option>

                            <option value="accordian">Accordion</option>
                            <option value="acoutic">Acoustic Guitar</option>
                            <option value="flute"> Flute</option>
                            <option value="clarinet">Clarinet</option>
                            <option value="saxophone">Saxophone</option>
                            <option value="drum">Drums</option>
                            <option value="electric">Electric Guitar</option>
                            <option value="">...</option>
                            <option value="">...</option>
                            <option value="">...</option>
                            <option value="">...</option>
                            <option value="">...</option>
                            <option value="">...</option>
                      
                        </Form.Control>
                       
                        
                    </Form.Group>
                    <br></br>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Music Genre</Form.Label>
                    <Form.Control onChange={(e) => {
                        console.log(e.target.value)
                        setGenre(e.target.value)
                    }}

                        as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option value="blues">Blues</option>
                        <option value="grass" >Blue Grass</option>
                        <option value="classical" >Classical</option>
                        <option value="counrty" >Country</option>
                        <option value="electronic">Electronic</option>
                        <option value="newage" >New age</option>
                        <option value="folk" >Folk</option>
                        <option value="jazz" >Jazz</option>
                        <option value="reggae" >Reggae</option>
                        <option value="hip"  >Hip-hop</option>
                        <option value="latin" >Latin</option>
                        <option value="rap" >Rap</option>
                        <option value="rock" >Rock</option>
                        <option value="pop" >Pop/Rock</option>
                        <option value="inter" >International</option>
                     
                        
                    </Form.Control>
                
                </Form.Group>
                <br></br>

                <Form.Row>
                    {/* <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group> */}
                
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Location by State</Form.Label>
                        <Form.Control onChange={(e) => {
                            setLocation(e.target.value)
                            console.log(e.target.value)
                        }}
                            as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                        
                            <option>Alabama</option>
                            <option>Alaska</option>
                            <option>Arizona</option>
                            <option>Arkansas</option>
                            <option>California</option>
                            <option>Colorado</option>
                            <option>Connecticut</option>
                            <option>Delaware</option>
                            <option>Florida</option>
                            <option>...</option>
                      

                        </Form.Control>
                    </Form.Group>

                    <br></br>
                </Form.Row>

                
                <Form.Group id="formGridCheckbox">
                    <Form.Label>Upload Band Demo</Form.Label>
                    <p><input type="file" ></input></p>
                </Form.Group> 

                <br></br>
                <Button variant="primary" type="submit"
                    onClick={(e) => {
                     
                        console.log("heelo",e)
                    }} 
                >
                    Submit Musician Search
                     
  </Button>
            </Form>
        </div>
    )
}
export default PostForm