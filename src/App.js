import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Router
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Header from './components/Header';
import Characters from './components/Characters';

function App() {
  
  const [ characters, setCharacters ] = useState([]);

  const searchApi = async () => {
    const char = await axios('https://www.breakingbadapi.com/api/characters');
    setCharacters(char.data);
  }

  useEffect(
    () => {
      searchApi()
    }, []
  )

  return ( 
    <div className="container">
      <Header />
      <Characters
        chars={characters}
      />
    </div>
    );
}
 
export default App;