import { useState } from 'react'
import mechanizmLogo from './assets/Mechanizm Team Building.png'
import worldMap from './assets/world map.png'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen m-11'>
      <a href='https://mechanizm.games' className='grid place-items-start max-w-6xl p-5'>
        <img src={mechanizmLogo} alt="mechanizm Remote Team Building logo" className=""/>
      </a>
      <span className='flex'>
        <div className='flex-col'>
          <h1 className='text-sky-950 text-9xl p-11'><strong>Collaborative Gaming</strong></h1>
          <h2 className='text-sky-950 text-4xl'>for <strong>Remote</strong> Teams</h2>
        </div>
        <img src={worldMap} alt="A map of the world. notice any software developer easter eggs?"/>
      </span>
      <>potato head</>
    </div>
  )
}

export default App
