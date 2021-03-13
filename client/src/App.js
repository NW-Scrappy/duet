import React from 'react'
import './App.css'
import NavBar from "./components/Navbar"
import PostForm from "./components/PostFormBand"
import UserForm from "./components/NewUserForm"
import Footer from "./components/Footer"
import NeedaBand from "./components/NeedaBand"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SearchForm from './components/Search'
 
function App() {
  return (
    <div>
    

      <Router>

          <NavBar />

          <Route exact path="/" />

          <Route exact path="/postband" component={PostForm} />

          <Route exact path="/newuser" component={UserForm} />

          <Route exact path="/MusicianSearch" component={NeedaBand} />

          <Route exact path="/SearchPage" component={SearchForm} />


          {/* <Route exact path="/about" component={MediaCard} /> */}

 
      </Router>


      <Footer />
  
    </div>
  );
}

export default App;
