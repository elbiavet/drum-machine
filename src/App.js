import { useState, useEffect } from 'react';
import './App.css';
import { Display } from './components/Display';
import { Teclado } from './components/Teclado';

import archivoQ from "./audio/Cev_H2.mp3" 
import archivoW from "./audio/Dsc_Oh.mp3" 
import archivoE from "./audio/Heater-1.mp3" 
import archivoA from "./audio/Heater-2.mp3" 
import archivoS from "./audio/Heater-3.mp3" 
import archivoD from "./audio/Heater-4_1.mp3" 
import archivoZ from "./audio/Heater-6.mp3" 
import archivoX from "./audio/Kick_n_Hat.mp3" 
import archivoC from "./audio/RP4_KICK_1.mp3" 


function App() {

  const data = [
    { id: 'Snare', key: 'Q', url: archivoQ},
    { id: 'Bass 1', key: 'W', url: archivoW },
    { id: 'Bongo', key: 'E', url: archivoE },
    { id: 'Tom Tom', key: 'A', url: archivoA },
    { id: 'Bass 3', key: 'S', url: archivoS },
    { id: 'Shotgun', key: 'D', url: archivoD },
    { id: 'High Hat', key: 'Z', url: archivoZ },
    { id: 'Drum Hit', key: 'X', url: archivoX },
    { id: 'Laser', key: 'C', url: archivoC },
  ]

  const [display, setDisplay] = useState("Haz click o pulsa una tecla")

  return (
    <div className="App" id="drum-machine">
      <h1>Drum Machine</h1>
      <div>
        <Display display={display}/> 
        <Teclado data={data} setDisplay={setDisplay}/>
      </div>
    </div>
  );
}

export default App;
