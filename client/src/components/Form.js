import React from "react"

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
                <FormBtn
                  disabled={!(formObject.band_name && formObject.band_genre)}
                  onClick={handleFormSubmit}
                >
                 Submit Listing
                </FormBtn>
              </form>
            </Col>
            <Col size="md-6 sm-12">
              <Jumbotron>
                <h1>Open Band Listings</h1>
              </Jumbotron>
              {band.length ? (
                <List>
                  {band.map(band => (
                    <ListItem key={band._id}>
                      <Link to={"/band/" + band._id}>
                        <strong>
                          {band.band_genre} by {band.band_name}
                        </strong>
                      </Link>
                      <DeleteBtn onClick={() => deleteBand(band._id)} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Col>
          </Row>
        </Container>
      );
    }


export default Form;