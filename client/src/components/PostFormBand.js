import React, { useState, useEffect } from "react";
import "../App.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import axios from "axios";

const PostFormBand = () => {
  const [band_name, setBandName] = useState("");
  const [instrument_seeking, setInstrument] = useState("");

  const [band_genre, setGenre] = useState("");
  const [location, setLocation] = useState("");

  const handleChange = (e) => {
    console.log("successful insert");
    e.preventDefault();
    axios
      .post("https://duet1.herokuapp.com/api/bands", {
        band_name: band_name,
        instrument_seeking: instrument_seeking,
        band_genre: band_genre,
        location: location,
      })

      .then((error) => {
        console.log(error);
      });
    handleClear();
  };

  const handleClear = () => {
    document.getElementById("create-post").reset();
  };

  return (
    <div>
      <Jumbotron fluid className="jumbotron">
        <Container>
          <h1
            style={{
              color: "#0DCAF0",
              fontSize: "45px",
              textShadow: "3px 3px 3px orange",
            }}
          >
            Band Seeking Musician
          </h1>
          <p
            style={{
              color: "#0DCAF0",
              fontSize: "30px",
            }}
          >
            Create your profile so a musician can find you.
          </p>
        </Container>
      </Jumbotron>
      <Form className="UserForm" id="create-post">
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Band Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Band Name"
              onChange={(e) => {
                console.log(e.target.value);
                setBandName(e.target.value);
              }}
            />
            <br></br>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Instrument needed</Form.Label>
            <Form.Control
              onChange={(e) => {
                console.log(e.target.value);
                setInstrument(e.target.value);
              }}
              as="select"
              defaultValue="Choose..."
            >
              <option>Choose...</option>
              <option value="accordion">Accordion</option>
              <option value="acoutic guitar">Acoustic Guitar</option>
              <option value="flute"> Flute</option>
              <option value="clarinet">Clarinet</option>
              <option value="saxophone">Saxophone</option>
              <option value="drums">Drums</option>
              <option value="electric guitar">Electric Guitar</option>
              <option value="vocals">Vocals</option>
              <option value="bass guitar">Bass Guitar</option>
              <option value="rhythm guitar">Rhythm Guitar</option>
              <option value="ukelele">Ukelele</option>
              <option value="tamborine">Tamborine</option>
              <option value="banjo">Banjo</option>
              <option value="cello">Cello</option>
              <option value="fiddle">Fiddle</option>
              <option value="trumpet">Trumpet</option>
              <option value="keyboards">Keyboards</option>
              <option value="xylophone">Xylophone</option>
              <option value="DJ">DJ</option>
              <option value="viola">Viola</option>
              <option value="accordian">Accordion</option>
              <option value="flute"> Flute</option>
              <option value="clarinet">Clarinet</option>
              <option value="saxophone">Saxophone</option>
            </Form.Control>
          </Form.Group>
          <br></br>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Band genre</Form.Label>
          <Form.Control
            onChange={(e) => {
              console.log(e.target.value);
              setGenre(e.target.value);
            }}
            as="select"
            defaultValue="Choose..."
          >
            <option> Choose...</option>
            <option value="blues">Blues</option>
            <option value="grass">Blue Grass</option>
            <option value="classical">Classical</option>
            <option value="counrty">Country</option>
            <option value="electronic">Electronic</option>
            <option value="newage">New age</option>
            <option value="folk">Folk</option>
            <option value="jazz">Jazz</option>
            <option value="reggae">Reggae</option>
            <option value="hip">Hip-hop</option>
            <option value="latin">Latin</option>
            <option value="rap">Rap</option>
            <option value="rock">Rock</option>
            <option value="pop">Pop/Rock</option>
            <option value="inter">International</option>
            <option value="prog">Prog Rock</option>
            <option value="ska">Ska</option>
            <option value="death">Death Metal</option>
            <option value="punk">Punk</option>
            <option value="emo">Emo</option>
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
            <Form.Control
              onChange={(e) => {
                setLocation(e.target.value);
                console.log(e.target.value);
              }}
              as="select"
              defaultValue="Choose..."
            >
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
        {/* 
        <Form.Group id="formGridCheckbox">
          <Form.Label>Upload Band Demo</Form.Label>
          <p>
            <input type="file"></input>
          </p>
        </Form.Group> */}

        <br></br>
        <Button
          className="submit"
          variant="primary"
          type="submit"
          onClick={handleChange}
        >
          Submit Musician Search
        </Button>
      </Form>
    </div>
  );
};

export default PostFormBand;
