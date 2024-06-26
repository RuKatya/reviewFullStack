import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App, { handleLoaderAPI } from '../App'

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            loader: handleLoaderAPI
        }
    ])
    
  return (
    <RouterProvider router = {router} />
  )
}

export default Routes