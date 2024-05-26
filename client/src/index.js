import React from "react";
import App from "./components/App";
import "./index.css";
import { createRoot } from "react-dom/client";
import ErrorPage from "./components/ErrorPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import TeamsList from "./components/TeamsList";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path:'/',
                element: <HomePage/>
            },
            {
                path:'/teams',
                element: <TeamsList/>
            }
        ]
    }
])

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router}/>);