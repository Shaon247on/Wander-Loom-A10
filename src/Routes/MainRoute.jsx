import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home";
import Root from "../Components/Pages/Root";
import AllTouristsSpot from "../Components/Pages/AllTouristsSpot";
import AddTouristsSpot from "../Components/Pages/AddTouristsSpot";
import MyList from "../Components/Pages/MyList";
import Register from "../Components/Pages/Register";
import Login from "../Components/Pages/Login";
import Bangladesh from "../Components/Sections/Bangladesh";
import Thailand from "../Components/Sections/Thailand";
import Indonesia from "../Components/Sections/Indonesia";
import Malaysia from "../Components/Sections/Malaysia";
import Vietnam from "../Components/Sections/Vietnam";
import Cambodia from "../Components/Sections/Cambodia";
import SpotDetails from "../Components/Sections/SpotDetails";
import PrivateRoute from "./PrivateRoute";
import ContactUs from "../Components/Pages/ContactUs";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader:()=> fetch('https://touring-site-server.vercel.app/UpdateTouristsSpots')
            },
            {
                path:'/AllTouristsSpot',
                element:<PrivateRoute><AllTouristsSpot></AllTouristsSpot></PrivateRoute>,
                loader:()=> fetch('https://touring-site-server.vercel.app/UpdateTouristsSpots')
            },
            {
                path:'/AddTouristsSpot',
                element:<PrivateRoute><AddTouristsSpot></AddTouristsSpot></PrivateRoute>,
                
            },
            {
                path:'/MyList',
                element:<PrivateRoute><MyList></MyList></PrivateRoute>,
                loader:()=> fetch('https://touring-site-server.vercel.app/UpdateTouristsSpots')
            },
            {
                path: '/Register',
                element:<Register></Register>
            },
            {
                path: '/Login',
                element: <Login></Login>
            },
            {
                path:'/Bangladesh',
                element:<PrivateRoute><Bangladesh></Bangladesh></PrivateRoute>,
                loader:()=> fetch('https://touring-site-server.vercel.app/UpdateTouristsSpots')
            },
            {
                path:'/Thailand',
                element:<PrivateRoute><Thailand></Thailand></PrivateRoute>,
                loader:()=> fetch('https://touring-site-server.vercel.app/UpdateTouristsSpots')
            },
            {
                path:'/Indonesia',
                element:<PrivateRoute><Indonesia></Indonesia></PrivateRoute>,
                loader:()=> fetch('https://touring-site-server.vercel.app/UpdateTouristsSpots')
            },
            {
                path:'/Malaysia',
                element:<PrivateRoute><Malaysia></Malaysia></PrivateRoute>,
                loader:()=> fetch('https://touring-site-server.vercel.app/UpdateTouristsSpots')
            },
            {
                path:'/Vietnam',
                element:<PrivateRoute><Vietnam></Vietnam></PrivateRoute>,
                loader:()=> fetch('https://touring-site-server.vercel.app/UpdateTouristsSpots')
            },
            {
                path:'/Cambodia',
                element:<PrivateRoute><Cambodia></Cambodia></PrivateRoute>,
                loader:()=> fetch('https://touring-site-server.vercel.app/UpdateTouristsSpots')
            },
            {
                path:'/SpotDetails/:id',
                element:<PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>,
                loader:({params})=> fetch(`https://touring-site-server.vercel.app/UpdateTouristsSpots/${params.id}`)
            },
            {
              path: '/contactus',
              element: <ContactUs></ContactUs>  
            }
        ]
    },
]);
export default router;