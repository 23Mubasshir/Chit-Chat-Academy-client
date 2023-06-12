import { Link, useNavigate } from "react-router-dom";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";
import useAdmin from "../../../Hooks/useAdmin";
import useInstructor from "../../../Hooks/useInstructor";

const SelectedClasses = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  //redirect if not user
  const navigate = useNavigate();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  if(isAdmin || isInstructor){
    navigate("/");
  }


  const handleDelete = (item) => {
    Swal.fire({
      title: "Do you want to delete this class?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="w-full">
      <div className="uppercase font-semibold h-[60px] flex justify-around items-center bg-sky-500 md:mx-28 m-5 mb-0 rounded-t-2xl text-white">
        <h3 className="text-3xl text-left">Total Items: {cart.length}</h3>
        <h3 className="text-3xl text-center">Total Price: ${total}</h3>
        
          <h1 className="text-3xl text-white font-bold text-center">
            DELETE/PAYment
          </h1>
        
      </div>
      <div className="overflow-x-auto w-3/10 mx-5 md:mx-28">
        <table className="table w-full text-md">
          {/* head */}
          <thead>
            <tr className="bg-sky-100 text-xl  ">
              <th>#</th>
              <th>Classes</th>
              <th className="text-center">Classes Name</th>
              <th className="text-center">Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
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
                <td className="text-center">${item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost bg-red-600  text-white mt-2 mr-2 "
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                  <Link to="/dashboard/payment">
                    <button className="btn btn-success text-white font-bold text-center">
                      PAY
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

export default SelectedClasses;
