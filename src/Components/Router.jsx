import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "./Main";
import Home from "./Home";
import Menu from "./Menu";
import Order from "./Shop/Order";
import ContactUs from "./Contact/ContactUs";
import Login from "./Login";
import Register from "./Register";
import Css from "./Css";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/menu",
        element: <Menu></Menu>
      },
      {
        path: "/order/:catagory",
        element: <Order></Order>
      },

      {
        path: "/contact",
        element: <ContactUs></ContactUs>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ]
  },
  
  {
    path:"/css",
    element:<Css></Css>
  }

]);