import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosHooks from "../Hooks/useAxiosHooks";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
 

const MyVolunteerPost = () => {
  const { user} = useContext(AuthContext);
  const axiosHook = useAxiosHooks();
  const [myPostData, setMyPostData] = useState();
  const [loading,setLoading] = useState(false)
  console.log(myPostData?.length,user);

  useEffect(() => {
    if(!user) return;
    
    axiosHook.get(`/addVolunteers?email=${user?.email}`).then((res) => {
      console.log(res.data);
      setMyPostData(res.data);
      
    });
  }, [user]);
  const handlePostDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosHook
          .delete(`/addVolunteers/${id}`)
          .then((res) => {
            // console.log(res.data);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            const remainingMyPostData = myPostData?.filter(
              (post) => post?._id !== id
            );
            setMyPostData(remainingMyPostData);
          })
          .catch((error) => {
            // console.log('delete is done',data);
            console.log(error, error?.message);
          });
      }
    });
  };
  return (
    <div className="text-white">
      <h1 className="text-2xl font-bold text-center">
        Volunteer Posted By Me : {myPostData?.length}
      </h1>
      <div>
        {myPostData?.length == 0? (
          <div className="flex justify-center items-center min-h-screen">
            <h1 className="text-4xl font-bold text-center my-4">Data Not Found</h1>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-lg font-bold text-white">
                  <th> Name</th>
                  <th>Add By</th>
                  <th> Type</th>
                  <th>Delete/Update</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {myPostData?.map((data) => (
                  <tr>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={data?.thumbnail}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{data?.title} </div>
                        </div>
                      </div>
                    </td>
                    <td>{data?.email}</td>
                    <td>{data?.category}</td>
                    <th>
                      <div className="flex">
                        <button
                          onClick={() => handlePostDelete(data?._id)}
                          className="btn btn-ghost btn-xs"
                        >
                          Delete
                        </button>
                        <NavLink to={`/updateMyPost/${data?._id}`}>
                          <button className="btn btn-ghost btn-xs ml-2 ">
                            Update
                          </button>
                        </NavLink>
                      </div>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
    // <div>
    //   <h1 className="text-2xl font-bold text-center">
    //     Volunteer Data Posted By Me
    //   </h1>
    //   <div>
        
          
      
    //       <div className="overflow-x-auto">
    //         <table className="table">
    //           {/* head */}
    //           <thead>
    //             <tr className="text-lg font-bold text-black">
    //               <th> Name</th>
    //               <th>Add By</th>
    //               <th> Type</th>
    //               <th>Delete/Update</th>
    //               <th></th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {myPostData?.map((data) => (
    //               <tr>
    //                 <td>
    //                   <div className="flex items-center gap-3">
    //                     <div className="avatar">
    //                       <div className="mask mask-squircle h-12 w-12">
    //                         <img
    //                           src={data?.thumbnail}
    //                           alt="Avatar Tailwind CSS Component"
    //                         />
    //                       </div>
    //                     </div>
    //                     <div>
    //                       <div className="font-bold">{data?.title} </div>
    //                     </div>
    //                   </div>
    //                 </td>
    //                 <td>{data?.email}</td>
    //                 <td>{data?.category}</td>
    //                 <th>
    //                   <div className="flex">
    //                     <button
    //                       onClick={() => handlePostDelete(data?._id)}
    //                       className="btn btn-ghost btn-xs"
    //                     >
    //                       Delete
    //                     </button>
    //                     <NavLink to={`/updateMyPost/${data?._id}`}>
    //                       <button className="btn btn-ghost btn-xs ml-2 ">
    //                         Update
    //                       </button>
    //                     </NavLink>
    //                   </div>
    //                 </th>
    //               </tr>
    //             ))}
    //           </tbody>
    //         </table>
    //       </div>
        
    //   </div>
    // </div>
  );
};

export default MyVolunteerPost;
