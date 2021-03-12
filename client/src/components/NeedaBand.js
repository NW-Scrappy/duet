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
                    <h1>Musician Seeking Band</h1>
                    <p>
                        This site is really for Fight Club. A underground secret fighting club. 
    </p>
                </Container>
            </Jumbotron>
            <Form className="UserForm">
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Musician Name</Form.Label>
                        <Form.Control type="text" placeholder="Band Name" />
                       <br></br>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Band Music Genre</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>Punk</option>
                            <option>Progressive Rock</option>
                            <option>Grunge</option>
                            <option>Heavy Metal</option>
                            <option>Ska</option>
                            <option>Electronica</option>
                            <option>Hip-Hop</option>
                            <option>Jazz</option>
                            <option>Street Brawling</option>
                            <option>String Quartet</option>
                            <option>Blues</option>
                            <option>Cover Band</option>
                            <option>Bare Knuckle Boxing</option>

                        </Form.Control>
                    </Form.Group>
                    <br></br>
                </Form.Row>

    
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
                            <option>Behind the bleachers</option>
                            <option>California</option>
                            <option>Colorado</option>
                            <option>Connecticut</option>
                            <option>Delaware</option>
                            <option>Florida</option>
                            <option>Dark Alley</option>
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
export default PostForm;