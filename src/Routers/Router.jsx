import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Home/Home";
import BookDetails from "../Pages/BookDetails";
import Wishlist from "../Pages/Wishlist";

export const Router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                loader: ()=>fetch("booksData.json"),
                Component: Home
            },
            {
                path: "BooKDeatils/:ID",
                loader: ()=>fetch("booksData.json"),
                Component: BookDetails
            },
            {
                path: "BooKDeatils/Wishlist",
                loader: ()=>fetch("booksData.json"),
                Component: Wishlist
            }
        ]
    }
])


