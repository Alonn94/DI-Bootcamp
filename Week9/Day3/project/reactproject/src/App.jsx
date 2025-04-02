import { useState, useEffect } from 'react'
import {Quotes} from './Quotes.js'


const getRandomColor = () => {
  const colors =[

    "#16a085", "#27ae60", "#2c3e50", "#f39c12",
    "#e74c3c", "#9b59b6", "#FB6964", "#342224",
    "#472E32", "#BDBB99", "#77B1A9", "#73A857"

  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

function App() {

  const [quoteIndex, setQuoteIndex] = useState(null);
  const [color, SetColor] = useState(getRandomColor());

  const getRandomQuoteIndex = (currentIndex) => {
    let newIndex = Math.floor(Math.random() * Quotes.length);
    while (newIndex === currentIndex) {
      newIndex = Math.floor(Math.random() * Quotes.length);
    }
    return newIndex;
  };


  const handleNewQuote = () => {
    const newIndex = getRandomQuoteIndex(quoteIndex);
    setQuoteIndex (newIndex);
    SetColor(getRandomColor());
  };

  useEffect(()=> {
    setQuoteIndex(getRandomQuoteIndex(null));
  },[]);

  if (quoteIndex === null) return null;

  const {quote,author} = Quotes[quoteIndex];
return (
  
  <div style={{ backgroundColor: color }}>

    <h1>{quote}</h1>
    <p>{author}</p>
    <button onClick = {handleNewQuote}>New Quote</button>

    </div>
)
}


  export default App;
