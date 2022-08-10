import React from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

//const word = "Hello";
var words = ['Hello', 'Sawasdee']
var word = words[Math.floor(Math.random()*words.length)];

const buttonRefresh = () =>
{
    window.location.reload();
}

function App() {
return (
        
        <div>
            
            <marquee direction="left">{word}</marquee>
            <WordCard value={word}/>
            <button className = 'button' onClick={buttonRefresh}>new game</button>
        </div>
    
    );
}
export default App;