
import {
    createBrowserRouter,
    Navigate,
     
} from "react-router-dom";
import HomeLayOut from "../LayOut/HomeLayOut";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayOut from "../LayOut/AuthLayOut";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";


const Router = createBrowserRouter([

    {
        path: '/',
        element: <HomeLayOut></HomeLayOut>,
        children: [

            

            
           {
            path: "/category/:id",
            element: <CategoryNews></CategoryNews>,
            loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
           },

            {
                path: "",
                element: <Navigate to="/category/01"></Navigate>

            },

          

        ],
    },
    {
        path: "/news/:id",
        element: <PrivateRoute> <NewsDetails></NewsDetails>  </PrivateRoute>,
        loader:({params}) =>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
        

    },

    {
        path: '/auth',
        element: <AuthLayOut></AuthLayOut>,
        children: [
           

            {
                path: '/auth/login',
                element: <Login></Login>

            },

            {
                path: '/auth/register',
                element: <Register></Register>
            }

        ]
       
    },

    {
        path: '*',
        element: <h1>Error 404</h1>
    }


])


export default Router;