import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import Lista from './components/Lista';

const router = createBrowserRouter([
  {
      path:"/",
      element: <App />,
      errorElement: <h1>Esta Pagina no existe bro</h1>,
  },
  {
      path:"/lista",
      element: <Lista/>,
  }
])

//Consdiere usar el enrutamiendo de React Router, pero cambie de parecer y solo añadi la lista de lado izquierdo.


ReactDOM.render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
  document.getElementById('root')
);
