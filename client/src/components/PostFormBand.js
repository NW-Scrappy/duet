import React from 'react'
import "../App.css"
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/Col"
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


 const PostForm = () => {
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
                        <Form.Control type="text" placeholder="Band Name" />
                       <br></br>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Instrument Seeking</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>Accordion</option>
                            <option>Acoustic Guitar</option>
                            <option> Flute</option>
                            <option>Clarinet</option>
                            <option>Saxophone</option>
                            <option>Drums</option>
                            <option>Rhythm Guitar</option>
                            <option>Lead Guitar</option>
                            <option>Bass Guitar</option>
                            <option>Cello</option>
                            <option>Fiddle/Violin</option>
                            <option>Trumpet</option>
                            <option>Ukelele</option>

                        </Form.Control>
                    </Form.Group>
                    <br></br>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Music Genre</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>Blues</option>
                        <option>Blue Grass</option>
                        <option>Classical</option>
                        <option>Country</option>
                        <option>Electronic</option>
                        <option>Folk</option>
                        <option>Hip-hop</option>
                        <option>Jazz</option>
                        <option>New age</option>
                        <option>Reggae</option>
                        <option>Latin</option>
                        <option>Rap</option>
                        <option>Rock</option>
                        <option>Pop/Rock</option>
                        <option>International</option>
                        
                        
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
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
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
                <Button variant="primary" type="submit">
                    Submit Musician Search
  </Button>
            </Form>
        </div>
    )
}
export default PostForm