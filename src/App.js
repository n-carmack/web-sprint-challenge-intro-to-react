import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import "./App.css";

import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState();

  useEffect(() =>{
    axios.get('https://swapi.dev/api/people/')
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.error(err))
  }, [])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      { data && <Character list={data} />}
    </div>
  );
}
export default App;
