import React from 'react';
import Navbar from './Components/Navbar';
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import Offer from "./Components/Offer";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Feature />
      <Offer />
      <About />
    </div>
  );
}

export default App;
