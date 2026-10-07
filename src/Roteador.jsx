import Paginainicial from './paginas/Paginainicial/Paginainicial';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const roteador = createBrowserRouter([
 {
   path: '',
   element: <Paginainicial />,
 },
]);



function Roteador(){
    return  <RouterProvider router={roteador} />;
}

export default Roteador;