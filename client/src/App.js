import React from "react"
import './App.css'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Profile from "./components/Profile"
import BandSearch from "./components/BandSearch"
import MusicianSearch from "./components/MusicianSearch"
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <div>
      <Navbar />
      <Footer />
      <Dashboard />
      <Profile />
      <BandSearch />
      <MusicianSearch />
    </div>
  );
}

export default App;
