import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
// import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`https://assignment-12-server-silk-seven.vercel.app/classes/${user?.email}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setClasses(result);
      });
  }, [user]);

  return (
    <div className="w-full">
      <div className="uppercase font-semibold h-[60px] flex justify-around items-center bg-sky-500 md:mx-28 m-5 mb-0 rounded-t-2xl text-white">
        <h3 className="text-3xl text-left">Total classes: {classes.length}</h3>
      </div>
      <div className="overflow-x-auto w-3/10 mx-5 md:mx-28">
        <table className="table w-full text-md">
          {/* head */}
          <thead>
            <tr className="bg-sky-100 text-xl  ">
              <th>#</th>
              <th>Classes</th>
              <th className="text-center">Classes Name</th>
              <th className="text-center">Total Students</th>
              <th>Status</th>
              <th>Feedback</th>
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
                <td className="text-center">{item?.enrolled_students}</td>
                <td>{item?.role}</td>
                <td>
                  {item?.role == "denied" ? item?.feedback : <></>}
                  
                  </td>
                <td>
                  <Link to="#">
                    <button className="btn btn-success text-white font-bold text-center">
                      Update
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
