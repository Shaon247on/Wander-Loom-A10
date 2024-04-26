import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home";
import Root from "../Components/Pages/Root";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
]);
export default router;