import React from "react"
import { Button } from "../ButtonComponents/Button";
import Navbar from "./Navbar"
import Container from "../grid/Container"

function Form() {
    return (
        <Container fluid>
          <Row>
            <Col size="md-6">
              <Navbar>
                <h1>Create New Band Listing</h1>
              </Navbar>
              <form>
                <Input
                  onChange={handleInputChange}
                  name="name of artist"
                  placeholder="Artist (required)"
                />
                <Input
                  onChange={handleInputChange}
                  name="instrument"
                  placeholder="Instrument (required)"
                />
                <TextArea
                  onChange={handleInputChange}
                  name="genre"
                  placeholder="genre (Optional)"
                />
                <Button />
              </form>
            </Col>
            <Col size="md-6 sm-12">
            </Col>
          </Row>
        </Container>
      );
    }
export default Form;