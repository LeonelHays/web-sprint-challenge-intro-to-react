import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character'
const App = () => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  


  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      setCharacters(res.data);
    })
    .catch(err => {
      console.error(err);
      setError('Sorry, the Jedi archives are incomplete');
    })
  })

  return (
    <div className="App">
      {error && <h1>{error}</h1>}
      <h1 className="Header">Characters</h1>
      {
      characters.map(ch => {
        return <Character 
        key={ch.id}
        info={ch}
        />
      })
      }
    </div>
  );
}

export default App;
// github is being wired
//chchchaangess
//STARRRR WAARRRRSSS
//ierign//eirg
//YESYESYES GIT FINALLY WORKED LET'S GOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO