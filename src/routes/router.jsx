import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Components/Home";
import Header from "../Pages/Header";
import Footer from "../Pages/Footer";
import Resigter from "../Components/Resigter";
import Login from "../Components/Login";
import PrivateRouter from "./PrivateRouter";
import AllVolunteer from "../Components/AllVolunteer";
import MyProfile from "../Components/MyProfile";
import AddVolunteer from "../Components/AddVolunteer";
import PostDetails from "../Components/PostDetails";



  const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayOut></MainLayOut>,
        children:[
          {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/allVolunteer',
          element: <AllVolunteer></AllVolunteer>
        },
        {
          path: '/myProfile',
          element: <MyProfile></MyProfile>
        },
        {
          path: '/postDetails',
          element:<PrivateRouter>
            <PostDetails></PostDetails>
          </PrivateRouter> 
        },
        {
          path: '/addVolunteer',
          element: <PrivateRouter><AddVolunteer></AddVolunteer></PrivateRouter>
        },
        
        {
          path: '/register',
          element: <Resigter></Resigter>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ]

    },
    {
        path:'/',
        element:  <Header></Header>
    },
    {
        path:'/footer',
        element:  <Footer></Footer>
    },
  ])

  export default router