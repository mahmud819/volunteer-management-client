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
import ManageMyPost from "../MyProfile/ManageMyPost";
import AddVolunteer from "../Components/AddVolunteer";
import PostDetails from "../Components/AllVolunteersInfo/PostDetails";
import AllVolunteer from "../Components/AllVolunteersInfo/AllVolunteer";
import BeAVolunteer from "../Components/AllVolunteersInfo/BeAVolunteer";
import MyVolunteerPost from "../MyProfile/MyVolunteerPost";
import MyRequestPost from "../MyProfile/MyRequestPost";
import MyProfile from "../MyProfile/MyProfile";
import UpdateMyPost from "../MyProfile/UpdateMyPost";
import Error from "../Error/Error";
import ShowAll from "../ShowAll/ShowAll.jsx";
import PopularOrg from "../PopularOrg/PopularOrg.jsx";



  const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayOut></MainLayOut>,
        errorElement:<Error></Error>,
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
          path:'/myProfile',
          element:<PrivateRouter><MyProfile></MyProfile></PrivateRouter>,
          
        },
        {
          path: '/addVolunteer',
          element: <PrivateRouter><AddVolunteer></AddVolunteer></PrivateRouter>
        },
        {
          path:'/manageMyPost',
          element:<PrivateRouter><ManageMyPost></ManageMyPost></    PrivateRouter>,
          children:[
            {
              path:'/manageMyPost/myVolunteerPost',
              element:<PrivateRouter><MyVolunteerPost></MyVolunteerPost></PrivateRouter>
            },
            {
              path:'/manageMyPost/myRequestPost',
              element:<PrivateRouter><MyRequestPost></MyRequestPost></PrivateRouter>
            }
          ]
        },
        {
          path: '/updateMyPost/:id',
          element: <PrivateRouter><UpdateMyPost></UpdateMyPost></PrivateRouter>,
          loader: ({ params }) =>
            fetch(`http://localhost:3000/addVolunteers/${params.id}`),
        },
        
        {
          path: '/postDetails/:_id',
          element:<PrivateRouter>
            <PostDetails></PostDetails>
          </PrivateRouter> ,
          loader: async ({ params }) => {
            const res = await fetch(
              "http://localhost:3000/addVolunteers"
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
              "http://localhost:3000/addVolunteers"
            );
            const data = await res.json();
            const singleData = data.find((d) => d._id == params._id);
            return singleData;
          },
        },
        {
          path: '/showAll',
          element: <ShowAll></ShowAll>
        },
        {
          path: '/popularOrg',
          element: <PopularOrg></PopularOrg>
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