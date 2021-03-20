import React, { useState, useEffect } from "react";
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
    // const searchQuery="https://duet1.herokuapp.com/api/" + dbLabel + "/" + instrument
    const searchQuery="/api/" + dbLabel + "/" + instrument
    axios
      .get(searchQuery)
      .then((result) => {
        console.log("result", result);
        console.log("result data", result.data);
        const data = result.data;
        setBandList([...data]);
        
        console.log("unfilteredlist", bandList);
        console.log("name", name)
        //filter by name of artist
        const filtered = bandList.filter((i) => {
          console.log(i)
          return i.band_name == name;
        });
        setFilteredList([...filtered]);
        console.log("filteredlist", filteredList)
      });
  };


  return (
    <div>
      <Jumbotron fluid className="jumbotron">
        <Container>
          <h1>Start Your Search</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>
      <br></br>
      <Form className="UserForm">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Search for a Band/Musician</Form.Label>
          <Form.Control  placeholder="Search" 
          onChange={(e) => {
            console.log(e.target.value);
            setName(e.target.value);
          }}
          />
          <Form.Text className="text-muted">
          </Form.Text>
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

            <option value="accordian">Accordion</option>
            <option value="acoutic">Acoustic Guitar</option>
            <option value="flute"> Flute</option>
            <option value="clarinet">Clarinet</option>
            <option value="saxophone">Saxophone</option>
            <option value="drums">Drums</option>
            <option value="electric">Electric Guitar</option>
            <option value="Bass">Bass</option>
            <option value="">...</option>
            <option value="">...</option>
            <option value="">...</option>
            <option value="">...</option>
            <option value="">...</option>
          </Form.Control>
        </Form.Group>
        <br></br>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>What genre of music?</Form.Label>
          <Form.Control type="genre" placeholder="Genre" />
        </Form.Group>
        <br></br>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Location?</Form.Label>
          <Form.Control type="Location" placeholder="Location" />
        </Form.Group>


        <Button className="submit" variant="primary" type="submit" onClick={handleClick}>

          Submit
        </Button>
      </Form>
              <SearchTable bandList={filteredList} dbLabel={dbLabel}/>
      
    </div>
  );
};

export default SearchForm;
