import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";

const ClassesCard = ({ props }) => {
  const { user } = useContext(AuthContext);
  const { name, image, price, available_seats, _id, instructor_name } = props;
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();


  const handleAddToCart = (props) => {
    console.log(props);
    if (user && user.email) {
      const cartItem = {
        classItemId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            // updating the number of items in the cart.
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your Course added on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to get the course",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sign in now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/sign-in", { state: { from: location } });
        }
      });
    }
  };

  const objectStyle = {
    backgroundColor: "#c22345",
    color: "white"
  };
  const objectStyleValid = {
 backgroundColor: "white",
  };



  return (
    <div>
      {/* <!-- Classes Cards --> */}
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
        <div className="bg-sky-200 rounded-xl">
          <div style={(available_seats == 0 ) ? objectStyle : objectStyleValid} className="flex flex-col p-8 rounded-xl bg-white shadow-2xl translate-x-4 translate-y-4 w-96 md:w-auto h-[550px]">
            <img
              src={image}
              className="w-80 rounded-xl h-[300px] object-cover"
            />
            <div className="mt-3 mb-1 font-semibold text-2xl">{name}</div>
            <div className="text-xl font-medium mb-4">
              by <span className="text-blue-600">{instructor_name}</span>
            </div>
            <div className="my-2">
              <span className="font-bold text-base">Available :</span>
              <span className="font-light text-sm">
                {" "}
                {available_seats} seats
              </span>
            </div>

            <div className="mb-2">
              <span className="font-bold text-base">$ {price}-</span>
              <span className="font-light text-sm">/ For Full Course</span>
            </div>
            {isAdmin || isInstructor || { available_seats } == 0 ? (
              <button
                disabled
                onClick={() => handleAddToCart(props)}
                className="bg-sky-100 px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4 font-semibold"
              >
                Select
              </button>
            ) : (
              <button
                onClick={() => handleAddToCart(props)}
                className="bg-sky-100 px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4 font-semibold"
              >
                Select
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
