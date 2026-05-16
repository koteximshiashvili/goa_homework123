import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import Settings from './components/Settings.jsx';
import Users from './components/Users.jsx';
import User from './components/User.jsx';
import Error from './components/Error.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
const router = createBrowserRouter([
  {path: "/", Component: App},
  {path: "/home", Component: Home},
  {path: "/contact", Component: Contact},
  {path: "/settings", Component: Settings},
  {path: "/users", Component: Users},
  {path: "/user/:id", Component: User},
  {path: "*", Component: Error}
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
