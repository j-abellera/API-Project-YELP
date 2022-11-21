import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js'
import BusinessList from '../BusinessList/BusinessList.js'

const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

const businesses = [
  business, 
  business, 
  business, 
  business, 
  business, 
  business
];

function App() {
  const searchYelp = (term, location, sortBy) => console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`)
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;

    // <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <BusinessList /> */}
      // <Business />
    // </div>