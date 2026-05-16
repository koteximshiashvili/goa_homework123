import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Error from './Error.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
const router = createBrowserRouter([
  {path: "/", Component: App},
  {path: "*", Component: Error}
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
