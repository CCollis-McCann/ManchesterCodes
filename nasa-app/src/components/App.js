import React, { useState } from 'react';
import Search from '../components/Search';
import SearchResults from '../components/SearchResults';
import '../styles/App.css';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <img
        className="App__logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasa logo"
      ></img>
      <Search setSearchResults={setSearchResults} />
      <SearchResults results={searchResults} />
    </div>
  );
}

export default App;
