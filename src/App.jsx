import { useState } from 'react'
import './App.css'

import Notify from './components/Notify';
import Jobs from './components/Jobs';
import PlayerStatus1 from './components/PlayerStatus1';
import Playerstatus2 from './components/PlayerStatus2';

function App() {

  const [display, setDisplay] = useState({
    Notify: true, Jobs: false ,PlayerStatus1: false, PlayerStatus2: false
  })

  return (
    <>
      {display.Notify &&
        <Notify/>
      }
      {display.Jobs &&
        <Jobs/>
      }
      {display.PlayerStatus1 &&
        <PlayerStatus1/>
      }
      {display.PlayerStatus2 &&
        <Playerstatus2/>
      }
    </>
  )
}

export default App
