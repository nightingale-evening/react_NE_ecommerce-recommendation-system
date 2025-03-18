import { createBrowserRouter, Navigate } from "react-router";
import PageNotFound from '../pages/404Page'
import App from "../pages/App";
import ProductDetails from "../components/web/product/ProductDetails";
import ProductSearch from "../pages/product/ProductSearch";

const router = createBrowserRouter([
    {
        children: [
            { path: "/", element: <Navigate to="/home" /> },
            {
                path: "/home",
                element: <App />,
            },
            {
                path: "/",
                children: [
                    { path: "product/:productId", element: <ProductDetails /> },
                    { path: "productSearch", element: <ProductSearch /> }
                ]
            },
            { path: "*", element: <PageNotFound /> },
        ],
    }
]);

export default router;