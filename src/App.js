import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [character, setCharacter] = useState([])
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/`)
    .then(res => {
      console.log(res.data);
      setCharacter(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  useEffect (() => {
    axios.get(`https://swapi.dev/api/people/`)
    .then(res => {
      console.log(res.data)
      character(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  })
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <><div className="App">
      <h1 className="Header">Characters</h1>
    </div><div className="Character">
      <h1 classCharacter="Header">People</h1>

      </div></>
  );
}

export default App;
