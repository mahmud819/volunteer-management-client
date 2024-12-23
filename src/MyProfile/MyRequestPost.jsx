import React from "react";
import { useLoaderData } from "react-router-dom";

const MyRequestPost = () => {
  const requestedData = useLoaderData();
//   console.log(data);
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">
        My Requested Post
      </h1>
      <div>
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
                        // onClick={() => handlePostDelete(data._id)}
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
      </div>
    </div>
  );
};

export default MyRequestPost;
