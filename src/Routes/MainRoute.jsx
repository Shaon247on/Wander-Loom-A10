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


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader:()=> fetch('http://localhost:5000/UpdateTouristsSpots')

            },
            {
                path:'/AllTouristsSpot',
                element:<AllTouristsSpot></AllTouristsSpot>,
                loader:()=> fetch('http://localhost:5000/UpdateTouristsSpots')
            },
            {
                path:'/AddTouristsSpot',
                element:<AddTouristsSpot></AddTouristsSpot>
            },
            {
                path:'/MyList',
                element:<MyList></MyList>
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
                element:<Bangladesh></Bangladesh>
            },
            {
                path:'/Thailand',
                element:<Thailand></Thailand>
            },
            {
                path:'/Indonesia',
                element:<Indonesia></Indonesia>
            },
            {
                path:'/Malaysia',
                element:<Malaysia></Malaysia>
            },
            {
                path:'/Vietnam',
                element:<Vietnam></Vietnam>
            },
            {
                path:'/Cambodia',
                element:<Cambodia></Cambodia>
            },
            {
                path:'/SpotDetails/:id',
                element:<SpotDetails></SpotDetails>,
                loader:({params})=> fetch(`http://localhost:5000/UpdateTouristsSpots/${params.id}`)
            },
            {
                
            }
        ]
    },
]);
export default router;