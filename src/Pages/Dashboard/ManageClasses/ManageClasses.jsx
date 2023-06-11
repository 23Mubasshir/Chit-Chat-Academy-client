import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { Link } from "react-router-dom";


const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    return res.data;
  });
  const handleApprove = (user) =>{
    console.log(user)
  }
  const handleDeny = (user) =>{
    console.log(user)
  }
  const handleFeedback = (user) =>{
    console.log(user)
  }

  return (
    <div className="w-full">
      <div className="uppercase font-semibold h-[60px] flex justify-around items-center bg-sky-500 md:mx-28 m-5 mb-0 rounded-t-2xl text-white">
        <h3 className="text-3xl text-left">Total classes: {classes.length}</h3>
      </div>
      <div className="overflow-x-auto w-3/10 mx-5 md:mx-28">
        <table className="table w-full text-md">
          {/* head */}
          <thead>
            <tr className="bg-sky-100 text-md  ">
              <th>#</th>
              <th>Classes Image</th>
              <th className="text-center">Classes Name</th>
              <th className="text-center">Instructor Name</th>
              <th className="text-center">Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {classes.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td className="text-center">{item.name}</td>
                <td className="text-center">{item?.instructor_name}</td>
                <td>{item?.instructor_email}</td>
                <td>{item?.available_seats}</td>
                <td>
                $ {item?.price}
                </td>
                <td>
                {item?.role}
                </td>
                <td>
                <div className="flex flex-col gap-1" >
                {item.role == "approved" || item.role == "denied" ? <button disabled className="btn btn-xs btn-success disabled">Approve</button> : <button onClick={handleApprove} className="btn btn-xs btn-success">Approve</button> }

                {(item.role == "approved") || (item.role == "denied") ? <button disabled className="btn btn-xs disabled">Deny</button> : <button onClick={handleDeny} className="btn btn-xs btn-error">Deny</button> }
                
                
                <button onClick={handleFeedback} className="btn btn-xs btn-info">Feedback</button>


                </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;