import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from "../App"
import MainPage, { handleLoaderMainPage } from "../View/Pages/MainPage"
import Contact from "../View/Pages/Contact"
import Item from "../View/Pages/Item"
import Error from "./Error"
import Coments, {handleLoaderComentsPage} from '../View/Pages/Coments'


const Routers = () => {

    const router = createBrowserRouter([
        {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <MainPage />,
                loader: handleLoaderMainPage
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "item/:itemId",
                element: <Item />
            },
            {
                path: "coments-of-post/:postID",
                element: <Coments />,
                loader: handleLoaderComentsPage
            }
        ]
        }
    ])

  return (
    <RouterProvider router = {router} />
  )
}

export default Routers