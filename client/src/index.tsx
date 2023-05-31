import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import router from './router';
import './index.scss';

const browserRouter = createBrowserRouter(router);
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={browserRouter}></RouterProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
