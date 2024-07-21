import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// const router = createHashRouter([
//   {
//     path: "/",
//     element: <Home />
//   },
//   {
//     path: "/guides",
//     element: <Guides />
//   },
//   {
//     path: "/experts",
//     element: <Experts />
//   },
//   {
//     path: "/browse",
//     element: <Browse />,
//   },
//   {
//     path: "/payment",
//     element: <Payment />,
//   },
//   {
//     path: "/forum",
//     element: <Forum />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);

