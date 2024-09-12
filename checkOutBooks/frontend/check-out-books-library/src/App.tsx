import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopBooks } from './HomePage/ExploreTopBooks';
import { Carousel } from './HomePage/Carousel';
import { Heroes } from './HomePage/Heroes';

function App() {
  return (
    <div>
    <Navbar />
    <ExploreTopBooks />
    <Carousel/>
    <Heroes />
    </div>
  );
}

export default App;
