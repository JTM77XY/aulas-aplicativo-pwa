import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Cabecalho from './componentes/cabecalho/cabecalho'
import Principal from './componentes/principal/principal'
import Rodape from './componentes/rodape/rodape'

function App() {
  return (
   <div>
    <Cabecalho/>
    <Principal/>
    <Rodape/>
   </div>
  )
}

export default App
