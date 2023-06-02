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
import MyBooking from "./Dashboard/User/MyBooking";
import PayementHistory from "./Dashboard/User/PayementHistory";
import AddReview from "./Dashboard/User/AddReview";
import Reservation from "./Dashboard/User/Reservation";
import { AdminRoute } from "./AdminRoute";

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
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path:'additem',
        element:<AdminRoute><AddItem></AddItem></AdminRoute>
      },
      {
        path:'manageitem',
        element:<AdminRoute><ManageItem></ManageItem></AdminRoute>
      },
      {
        path:"managebooking",
        element:<AdminRoute><ManageBooking></ManageBooking></AdminRoute>
      },
      {
        path:'mybooking',
        element:<MyBooking></MyBooking>
      },
      {
        path:"payment",
        element:<PayementHistory></PayementHistory>
      },
      {
        path:'addriview',
        element:<AddReview></AddReview>
      },
      {
        path:'reservartion',
        element:<Reservation></Reservation>
      }
    ]
  },
  
  {
    path:"/css",
    element:<Css></Css>
  }

]);