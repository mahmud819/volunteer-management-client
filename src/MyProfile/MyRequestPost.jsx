import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAxiosHooks from "../Hooks/useAxiosHooks";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { div } from "motion/react-client";

const MyRequestPost = () => {
  const axiosHook = useAxiosHooks();
  const { setLoading } = useContext(AuthContext);
  const [requestedData, setRequestedData] = useState([]);
  useEffect(() => {
    setLoading(true);
    axiosHook
      .get("http://localhost:5000/beAVolunteer")
      .then((res) => {
        console.log(res.data);
        setRequestedData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err, err.message);
      });
  }, []);
  const handleCancelRequest = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure to Cancel the Request?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosHook
          .delete(`/beAVolunteer/${id}`)
          .then((res) => {
            console.log(res.data);
            Swal.fire({
              title: "Cencel!",
              text: "Your Request is Canceled.",
              icon: "success",
            });
            const remainingMyRequestedData = requestedData.filter(
              (post) => post._id !== id
            );
            setRequestedData(remainingMyRequestedData);
          })
          .catch((error) => {
            // console.log('delete is done',data);
            console.log(error, error.message);
          });
      }
    });
  };
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">My Requested Post</h1>
      <div>
        {requestedData?.length == 0 ? (
          <div className="flex justify-center items-center min-h-screen">
            <h1 className="text-4xl font-bold text-center my-4">
              Data Not Found
            </h1>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-lg font-bold text-black">
                  <th> Name</th>
                  <th>Add By</th>
                  <th> Type</th>
                  <th>Manage Requested Post</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {requestedData.map((data) => (
                  <tr>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={data.thumbnail}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{data.title} </div>
                        </div>
                      </div>
                    </td>
                    <td>{data.email}</td>
                    <td>{data.category}</td>
                    <th>
                      <div className="flex">
                        <button
                          onClick={() => handleCancelRequest(data._id)}
                          className="btn btn-ghost btn-xs"
                        >
                          Cancel
                        </button>
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
  );
};

export default MyRequestPost;
