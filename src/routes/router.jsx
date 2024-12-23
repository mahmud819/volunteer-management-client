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
import MyProfile from "../Components/MyProfile";
import AddVolunteer from "../Components/AddVolunteer";
import PostDetails from "../Components/AllVolunteersInfo/PostDetails";
import AllVolunteer from "../Components/AllVolunteersInfo/AllVolunteer";
import BeAVolunteer from "../Components/AllVolunteersInfo/BeAVolunteer";



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
          path: '/postDetails/:_id',
          element:<PrivateRouter>
            <PostDetails></PostDetails>
          </PrivateRouter> ,
          loader: async ({ params }) => {
            const res = await fetch(
              "http://localhost:5000/addVolunteers"
            );
            const data = await res.json();
            const singleData = data.find((d) => d._id == params._id);
            return singleData;
          },
        },
        {
          path: '/beAVolunteer/:_id',
          element: <PrivateRouter><BeAVolunteer></BeAVolunteer></PrivateRouter>,
          loader: async ({ params }) => {
            const res = await fetch(
              "http://localhost:5000/addVolunteers"
            );
            const data = await res.json();
            const singleData = data.find((d) => d._id == params._id);
            return singleData;
          },
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