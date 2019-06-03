import React from 'react';
import './App.css';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';

function App() {
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords  guessedWords={[
        {guessedWord: 'Boo', letterMatchCount: 2}
      ]} />
    </div>
  );
}

export default App;
