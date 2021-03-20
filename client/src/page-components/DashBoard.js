
import React from "react";
import Button from "react-bootstrap/Button";

function Dashboard() {
  return (
    <div class="Container">
      <h1
        style={{
          color: " #0DCAF0",
          fontSize: "45px",
          textAlign: "center",
          textShadow: "3px 3px 3px orange",
        }}
      >
        Welcome to Duet
      </h1>
      <img src="duet.png"></img>
      <div class="Buttons">
        <Button
          href="/postband"
          className="bandBtn"
          variant="primary"
          type="submit"
        >
          Find a Musician!
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button
          href="/SearchPage"
          className="searchBtn"
          variant="primary"
          type="submit"
        >
          Search!
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button
          href="/postmusician"
          className="musicianBtn"
          variant="primary"
          type="submit"
        >
          Find a Band!
        </Button>
      </div>
    </div>
  );

}
export default Dashboard;
