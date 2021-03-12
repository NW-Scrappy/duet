import React from 'react'
import './App.css'
import NavBar from "./components/Navbar"
import PostForm from "./components/PostFormBand"
import UserForm from "./components/NewUserForm"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
 



function App() {
  return (
    <div>
    

      <Router>

    
          <NavBar />

          <Route exact path="/" />

          <Route exact path="/postband" component={PostForm} />

          <Route exact path="/newuser" component={UserForm} />


          {/* <Route exact path="/about" component={MediaCard} /> */}

 
      </Router>


      <Footer />
  
    </div>
  );
}

export default App;
