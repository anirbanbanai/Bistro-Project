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
import DashBoard from "./DashBoard";
import MyCart from "./Dashboard/MyCart";
import { PrivetRoute } from "./PrivetRoute";
import AllUsers from "./Dashboard/AllUsers";
import AddItem from "./Dashboard/Admin/AddItem";
import ManageItem from "./Dashboard/Admin/ManageItem";
import ManageBooking from "./Dashboard/Admin/ManageBooking";

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
      }
    ]
  },
  {
    path:"dash",
    element:<PrivetRoute><DashBoard ></DashBoard></PrivetRoute>,
    children:[
      {
        path:"mycart",
        element:<MyCart></MyCart>
      },
      {
        path:"alluser",
        element:<AllUsers></AllUsers>
      },
      {
        path:'additem',
        element:<AddItem></AddItem>
      },
      {
        path:'manageitem',
        element:<ManageItem></ManageItem>
      },
      {
        path:"managebooking",
        element:<ManageBooking></ManageBooking>
      }
    ]
  },
  
  {
    path:"/css",
    element:<Css></Css>
  }

]);