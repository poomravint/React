import React from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

//const word = "Hello";
var words = ['Hello', 'Sawasdee']
var word = words[Math.floor(Math.random()*words.length)];


function App() {
return (
        
        <div>
            <WordCard value={word}/>
        </div>
    
    );
}
export default App;