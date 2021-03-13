import React from "react"
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';



const SignInForm = () => {
    // const [musician_name, setMusicianName] = useState("")
    // const [instrument_playing, setInstrument] = useState("")


    return (

        <div>
            <Jumbotron fluid className="jumbotron">
                <Container>
                    <h1>Duet User Login</h1>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
    </p>
                </Container>
            </Jumbotron>

            <Form className="UserForm">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter username" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
    </Form.Text>
                </Form.Group>
                <br></br>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>User Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <br></br>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label> Confirm User Password</Form.Label>
                    <Form.Control type="password" placeholder="re-enter password" />
                </Form.Group>

                <Button className="UserBtn" variant="primary" type="submit">
                    Submit
  </Button>
            </Form>

        </div>
    )
}





export default SignInForm;