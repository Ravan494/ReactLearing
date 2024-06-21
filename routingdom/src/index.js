import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import HomePage from './component/Home';
import { createElement } from 'react';
import Blog from './component/Blog';
import About from './component/About';


const root = ReactDOM.createRoot(document.getElementById('root'));
let Routes = createBrowserRouter(
  [
    {
      path:'/',
      element:<HomePage/>
    },
    {
      path:'/Blog',
      element:<Blog/>
    },
    {
      path:'/About',
      element:<About/>
    }
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={Routes} />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();