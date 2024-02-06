import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import { SnackbarProvider } from 'notistack'
import Cart from './pages/Cart.jsx'

const router = createBrowserRouter([
    {
        element: <Home />,
        path: "/",
    },
    {
        element: <Menu />,
        path: "/restaurant/:id",
    },
    {
        element: <Login />,
        path: '/login'
    },
    {
        element: <Register />,
        path: '/register'
    },
    {
        element: <Cart />,
        path: '/cart'
    }

]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SnackbarProvider>
    <RouterProvider router={router} />
    </SnackbarProvider>
  </React.StrictMode>,
)
