import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js'
import BusinessList from '../BusinessList/BusinessList.js'
import {Yelp} from '../../util/Yelp.js'


function App() {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = async (term, location, sortBy) => {
    const results = await Yelp.search(term, location, sortBy)
    setBusinesses(results);
  }
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