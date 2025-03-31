import { useState } from 'react'
import './App.css'
import Buggycounter from './Buggycounter'
import ErrorBoundary from './ErrorBoundary'
import Color from './Color'

function App() {

  return (
    <>
    <ErrorBoundary fallback={'buggycounter1'}>
    <Buggycounter/>
    </ErrorBoundary>


    {/* <ErrorBoundary fallback={'buggycounter2'}>
    <Buggycounter/>
    </ErrorBoundary>
    <Buggycounter/> */}

    <Color/>


    </>
  )
}

export default App
