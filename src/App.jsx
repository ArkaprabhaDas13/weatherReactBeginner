import { useState } from 'react'
import '../src/app.css';
import { Weather } from './components/Weather';

function App() {
  
  return (
    <>
      
      <div className='container'>
        <h1>Hello World</h1>
        <Weather/>
      </div>
      
    </>
  )
}

export default App
