// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'

import './App.css'
import Cabecalho from './componentes/cabecalho/cabecalho'
import Principal from './componentes/principal/principal'
import Rodape from './componentes/rodape/rodape'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Paginainicial from './paginas/Paginainicial/Paginainicial';

const roteador = createBrowserRouter([
 {
   path: '',
   element: <Paginainicial />,
 },
]);


function App() {
  return (
   <>
    <Cabecalho/>
    <RouterProvider router={roteador} />
    <Rodape/>
   </>
  )
}

export default App
