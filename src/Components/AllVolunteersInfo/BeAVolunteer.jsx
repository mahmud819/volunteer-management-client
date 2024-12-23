import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAxiosHooks from '../../Hooks/useAxiosHooks';

const BeAVolunteer = () => {

    const {user} = useContext(AuthContext);
    const data = useLoaderData();
    const axiosHook = useAxiosHooks();
    // console.log(data,user.email,user.displayName);

    const handleBeAVolunteer =e=>{
      e.preventDefault();

     
      const name = e.target.name.value;
      const volunteerName = e.target.volunteerName.value;
      const email = e.target.email.value;
      const volunteerEmail = e.target.volunteerEmail.value;
      const thumbnail = e.target.thumbnail.value
      const title = e.target.title.value;
      const description = e.target.description.value;
      const volunteerNumber = e.target.volunteerNumber.value;
      const deadline = e.target.deadline.value;
      const category = e.target.category.value;
      const suggestion = e.target.suggestion.value;
      const status = e.target.status.value;
      const applydId = data?._id;
      const requestedData = {title,description,deadline,email,thumbnail,applydId,volunteerNumber,category,name,volunteerName,volunteerEmail,status,suggestion}
      axiosHook.post('/beAVolunteer')
      .then(res=>{
        console.log(res)
      })
      .catch(error=>{
        console.log(error,error.message);
      })
      // console.log(requestedData);
    }
    const {title,description,deadline,email,thumbnail,_id,volunteerNumber,category,name} = data;
    
    return (
        <div>
      <h1 className="text-4xl font-bold text-center py-2">Apply As A Volunteer</h1>
      <form onSubmit={handleBeAVolunteer} className="w-4/5 mx-auto mt-6 rounded-lg bg-gray-300 p-4 grid grid-cols-1 gap-4 lg:grid-cols-2 ">
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Organizer Name</span>
          </label>
          <input name ='name'
            type="text"
            placeholder="Organizer Name"
            className="input input-bordered"
            defaultValue={`${name}`}
            required
            readOnly
          />
        </div>
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Organizer Email</span>
          </label>
          <input name='email'
            type="email"
            placeholder={`${email}`}
            className="input input-bordered"
            defaultValue={`${email}`}
            required
            readOnly
          />
        </div>
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Thumbnail</span>
          </label>
          <input name="thumbnail"
            type="text"
            placeholder="Thumbnail URL"
            className="input input-bordered"
            defaultValue={`${thumbnail}`}
            required
            readOnly
          />
        </div>
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Post Title</span>
          </label>
          <input name="title"
            type="photo"
            placeholder="Post Title"
            className="input input-bordered"
            defaultValue={`${title}`}
            required
            readOnly
          />
        </div>
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input name="description"
            type="text"
            placeholder="Description"
            className="input input-bordered"
            defaultValue={`${description}`}
            required
            readOnly
          />
        </div>
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">No. of volunteers needed</span>
          </label>
          <input name="volunteerNumber"
            type="number"
            placeholder="No. of volunteers needed"
            className="input input-bordered"
            defaultValue={`${volunteerNumber}`}
            required
            readOnly
          />
        </div>
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Deadline</span>
          </label>
          <input name="deadline"
            type="text"
            placeholder="Deadline"
            className="input input-bordered"
            defaultValue={`${deadline}`}
            readOnly
            required
          />
        </div>
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select name="category" className="select select-primary w-full max-w-lg">
            <option disabled selected>
            {`${category}`}
            </option>
            <option>Healthcare</option>
            <option>Education</option>
            <option>Social service</option>
            <option>Animal welfare</option>
           
          </select>
        </div>
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Volunteer Name</span>
          </label>
          <input name ='volunteerName'
            type="text"
            placeholder={`${user?.displayName}`}
            className="input input-bordered"
            defaultValue={`${user?.displayName}`}
            
            readOnly
            
          />
        </div>
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Volunteer Email</span>
          </label>
          <input name='volunteerEmail'
            type="email"
            placeholder={`${user?.email}`}
            className="input input-bordered"
            defaultValue={`${user?.email}`}
            required
            readOnly
          />
        </div>
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Suggestion</span>
          </label>
          <input name='suggestion'
            type="text"
            placeholder='Give your Opinion/Sugestion'
            className="input input-bordered"
            required
          />
        </div>
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Status</span>
          </label>
          <input name='status'
            type="text"  
            className="input input-bordered"
            defaultValue='Requested'
            required
            readOnly
          />
        </div>
        <div className="">
          <button className="btn mx-auto">Request</button>
        </div>
      </form>
    </div>
    );
};

export default BeAVolunteer;