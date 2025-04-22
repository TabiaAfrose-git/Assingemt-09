import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './provider/AuthProvider';
import PrivetRouter from './routers/PrivetRouter';
import DashBord from './components/DashBord';
import Profile from './components/Profile';
import About from './components/About';
import PropertyDetails from './components/PropertyDetails';
import Contact from './components/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path: '/',
        element:<Home></Home>,
        loader: ()=> fetch('/data.json')
      },
      {
        path: '/residentia/:id',
        element:<PrivetRouter><PropertyDetails></PropertyDetails></PrivetRouter>,
        loader: ()=> fetch('../data.json')
      },
      {
        path: '/Login',
        element: <Login></Login>
      },
      {
        path: '/Register',
        element: <Register></Register>
      },
      {
        path: '/dashboard',
        element: <PrivetRouter><DashBord></DashBord></PrivetRouter>
      },
      {
        path: '/profile',
        element: <PrivetRouter><Profile></Profile></PrivetRouter>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
