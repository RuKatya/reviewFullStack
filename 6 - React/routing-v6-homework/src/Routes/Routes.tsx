import React, { Children } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App, { handleLoaderAPI } from '../App'
import Categories, { handleLoaderCategories } from '../Pages/Categories'
import Category, { handleLoaderApiCategory } from '../Pages/Category'
import JokePage from '../Pages/JokePage'
import Layout from '../Pages/Layout'

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <App />,
                    loader: handleLoaderAPI
                },
                {
                    path: "joke-page",
                    element: <JokePage />
                },
                {
                    path: "categories",
                    element: <Categories />,
                    loader: handleLoaderCategories
                },
                {
                    path: "jokes-categories/:categoryname",
                    element: <Category />,
                    loader: handleLoaderApiCategory
                }

            ]
        }
    ])
    
  return (
    <RouterProvider router = {router} />
  )
}

export default Routes