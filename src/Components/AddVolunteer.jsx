import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2';
import useAxiosHooks from "../Hooks/useAxiosHooks";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';




const AddVolunteer = () => {

    const {user} = useContext(AuthContext);
    const axiosHook = useAxiosHooks();
    const [startDate, setStartDate] = useState(new Date());
    
    const handleAddVolunteers =e=>{
        e.preventDefault();

       
        const name = e.target.name.value;
        const email = user.email;
        const thumbnail = e.target.thumbnail.value
        const title = e.target.title.value;
        const description = e.target.description.value;
        const volunteerNumber = e.target.volunteerNumber.value;
        const deadline = startDate;
        const category = e.target.category.value;

        const data = {name,email,thumbnail,title,volunteerNumber,category,description,deadline}
        console.log(data);
        // axios.post('http://localhost:5000/addedJobs',data,{withCredentials:true})
        axiosHook.post('/addVolunteers',data)
        .then(res=>{
            console.log(res);
            Swal.fire({
                      title: "Well Done!",
                      text: "Your Post is added successfuly!",
                      icon: "success"
                    });
        })
    }
    return (
    <div>
      <h1 className="text-4xl font-bold text-center py-2">Add Volunteer Post</h1>
      <form onSubmit={handleAddVolunteers} className="w-4/5 mx-auto mt-6 rounded-lg bg-gray-300 p-4 grid grid-cols-1 gap-4 lg:grid-cols-2 ">
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Organizer Name</span>
          </label>
          <input name ='name'
            type="text"
            placeholder="Organizer Name"
            className="input input-bordered"
            // defaultValue={}
            // readOnly
            // required
          />
        </div>
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Organizer Email</span>
          </label>
          <input name='email'
            type="email"
            placeholder={`${user.email}`}
            className="input input-bordered"
            defaultValue={`${user?.email}`}
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
            required
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
            required
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
            required
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
            required
          />
        </div>
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Deadline</span>
          </label>
          {/* <input  name="deadline"
            type="text"
            placeholder="Deadline"
            className="input input-bordered"
            required
          /> */}
          
          <DatePicker
          showIcon
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        </div>
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select name="category" className="select select-primary w-full max-w-lg">
            <option disabled selected>
              Choose Category
            </option>
            <option>Healthcare</option>
            <option>Education</option>
            <option>Social service</option>
            <option>Animal welfare</option>
           
          </select>
        </div>
        <div className="">
          <button className="btn mx-auto">Add Post</button>
        </div>
      </form>
    </div>
    );
};

export default AddVolunteer;