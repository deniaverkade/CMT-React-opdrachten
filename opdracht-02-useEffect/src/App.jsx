import './App.css'
import Clock from './components/Clock';
import {useEffect, useState} from 'react';
import WelcomeMessage from './components/WelcomeMessage';

function App() {

  return (
    <>
    <WelcomeMessage/>
  <Clock/>
    </>
  )
}

export default App
