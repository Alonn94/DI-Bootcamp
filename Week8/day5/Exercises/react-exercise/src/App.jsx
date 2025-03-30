import React from 'react';
import { useState } from 'react'
import './App.css'
import Car from './components/Car.jsx'
import Phone from './components/Phone.jsx'
import Color from './components/Color'
function App() {

  const carinfo = {name:"Ford", model:"Mustang"};

  return (


    <>
    <h1>hello</h1>
    <Car car={carinfo}/>
    <Phone/>
    <Color/>
    </>
  );
};

export default App;



