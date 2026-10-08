import Paginainicial from './paginas/Paginainicial/Paginainicial';
import PaginaListaProdutos from './paginas/PaginaListaProdutos/PaginaListaProdutos';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const roteador = createBrowserRouter([
 {
   path: '',
   element: <Paginainicial />,
 },
 {
    path: 'lista-produtos',
    element: <PaginaListaProdutos />,
 },

]);


function Roteador(){
    return  <RouterProvider router={roteador} />;
}

export default Roteador;