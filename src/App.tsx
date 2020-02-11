import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [thingToDo, setThingToDo] = useState('');
  
  const thingsToDo = [
    'write a article about the number of dependencies for different frameworks',
    'make do something app',
    'make personal blog',
    'play csgo',
    'learn spanish',
    'read How To Make Friends and Influence People',
  ];

  const pickAThing = () => {
    const index = Math.floor(Math.random() * thingsToDo.length);
    setThingToDo(thingsToDo[index]);
  }
  const clearThing = () => {
    setThingToDo('');
  }

  return (
    <div className="App">
      <header className="App-header">
        {thingToDo.length === 0 &&
        <div className="do-button" onClick={pickAThing}>
          <span>Do Something!</span>
        </div>
        }
        {thingToDo.length > 0 &&
        <div>
          <button className="refresh" onClick={clearThing} >
          </button>
          <div className="thing-to-do">
            {thingToDo}
          </div>
        </div>
        }
      </header>
    </div>
  );
}

export default App;
