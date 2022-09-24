import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './pages/dashboard';
import ErrorPage from './pages/error-page';
import Signin from './pages/signin';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },

  {
    path: '/onboard',
    element: <Signin />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
