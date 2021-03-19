import React from "react"
import Button from "react-bootstrap/Button";
function Dashboard() {
    return (
        <div>

                <Button href="/Dashboard" className="UserBtn" variant="primary" type="submit">
                    User Sign-in
  </Button>
                <br></br>
                <br></br>
                <Button href="/newuser" className="UserBtn" variant="primary" type="submit">
                  No Account? Register Now
  </Button>
          

        </div>
     
    )
}
export default Dashboard;