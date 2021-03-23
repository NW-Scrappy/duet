import React, { useState } from "react";
import SearchTable from "./SearchTable";
import Form from "react-bootstrap/Form";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "../App.css";
import axios from "axios";
import Col from "react-bootstrap/Col";

const SearchForm = () => {
  const [dbLabel, setdbLabel] = useState("");
  const [instrument, setInstrument] = useState("");
  const [name, setName] = useState("");
  const [bandList, setBandList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .get("https://duet1.herokuapp.com/api/" + dbLabel + "/" + instrument)
      .then((res) => {
        console.log("instrument", instrument);
        console.log(res);
        const data = res.data;
        setBandList(data);
        console.log("bandlist", bandList);

        console.log("name", name);
        //filter by name of artist
        if (name.length > 0) {
          if (dbLabel == "bands") {
            const filtered = bandList.filter(
              (i) => i.band_name.indexOf(name) > -1
            );
            console.log("filtered", filtered);
            setFilteredList([...filtered]);
            console.log("filteredlist", filteredList);
          } else if (dbLabel == "musicians") {
            const filtered = bandList.filter(
              (i) => i.musician_name.indexOf(name) > -1
            );
            console.log("filtered", filtered);
            setFilteredList([...filtered]);
            console.log("filteredlist", filteredList);
          }
        } else {setFilteredList(bandList)}
      });
  };


  return (
    <div className="container searchbar">
      <Jumbotron fluid className="jumbotron">
        <Container>
          <h1
            style={{
              color: "#0DCAF0",
              fontSize: "45px",
              textShadow: "3px 3px 3px orange",
            }}
          >
            Start Your Search
          </h1>
          <p
            style={{
              color: "#0DCAF0",
              fontSize: "30px",
            }}
          >
            Connect with a band or musician.
          </p>
        </Container>
      </Jumbotron>

      <Form className="UserForm">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Search for a Band/Musician</Form.Label>
          <Form.Control
            placeholder="Search"
            onChange={(e) => {
              console.log(e.target.value);
              setName(e.target.value);
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <br></br>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Band or Musician?</Form.Label>
          <Form.Control
            onChange={(e) => {
              console.log(e.target.value);
              setdbLabel(e.target.value);
            }}
            as="select"
            defaultValue="Choose..."
          >
            <option>Choose...</option>

            <option value="bands">Search For Bands</option>
            <option value="musicians">Search for Musicians</option>
          </Form.Control>
        </Form.Group>

        <br></br>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Instrument Playing</Form.Label>
          <Form.Control
            onChange={(e) => {
              console.log(e.target.value);
              setInstrument(e.target.value);
            }}
            as="select"
            defaultValue="Choose..."
          >
            <option value="">Choose...</option>

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
        <Button
          className="submit"
          variant="primary"
          type="submit"
          onClick={handleClick}
        >
          Submit
        </Button>
      </Form>
      <SearchTable bandList={filteredList} dbLabel={dbLabel} />
    </div>
  );
};

export default SearchForm;
