import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import Layout from './components/Layout.jsx';
import Form from './components/Form.jsx';
import Main from './components/Main.jsx';
import User from './components/User.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <App /> },
      { path: 'form', element: <Form /> },
      { path: 'main', element: <Main /> },
      { path: 'user/:id', element: <User /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
