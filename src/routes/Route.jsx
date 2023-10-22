import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Products from "../pages/Products/Products";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddProducts from "../pages/AddProducts/AddProducts";
import PrivateRoutes from "./PrivateRoute";
import Details from "../pages/Details/Details";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/addProduct",
                element: <PrivateRoutes><AddProducts></AddProducts></PrivateRoutes>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/brand/:name",
                element: <Products></Products>,
                loader: ()=>fetch('https://bhola-shop-server-msgrxnggi-sazids-projects.vercel.app/products')
            },
            {
                path: "/product/:id",
                element: <PrivateRoutes><Details></Details></PrivateRoutes>,
                loader: ()=>fetch('https://bhola-shop-server-msgrxnggi-sazids-projects.vercel.app/products')
            }
        ],
    },
]);

export default router;