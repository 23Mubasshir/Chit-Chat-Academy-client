import { useForm } from "react-hook-form";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Slide } from "react-awesome-reveal";
import { FaTh } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  //   const [axiosSecure] = useAxiosSecure();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const classWithRole = { ...data, role: "pending", price:parseFloat(data.price), available_seats:parseFloat(data.available_seats), enrolled_students:0, feedback:" " };
    console.log(classWithRole);
    fetch("https://assignment-12-server-silk-seven.vercel.app/classes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(classWithRole),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your Class Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        reset();
      });
  };

  return (
    <div className="w-full px-10">
      <Slide>
        <h1 className="font-bold text-6xl text-start pt-12 font-mono uppercase text-sky-800 flex mb-12">
          <FaTh className="me-5" />
          Add a Class
        </h1>
      </Slide>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <div className="form-control w-1/2 mb-4 mr-4">
            <label className="label">
              <span className="label-text font-semibold">Instructor name*</span>
            </label>
            <input
              value={user?.displayName}
              type="text"
              placeholder="Instructor name"
              {...register("instructor_name", {
                required: true,
                maxLength: 120,
              })}
              className="input input-bordered w-full "
            />
          </div>

          <div className="form-control w-1/2 mb-4">
            <label className="label">
              <span className="label-text font-semibold">
                Instructor email*
              </span>
            </label>
            <input
              value={user?.email}
              type="email"
              placeholder="Instructor email"
              {...register("instructor_email", {
                required: true,
                maxLength: 120,
              })}
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <div className="flex">
          <div className="form-control w-1/2 mb-4 mr-4">
            <label className="label">
              <span className="label-text font-semibold">Class Name*</span>
            </label>
            <input
              type="text"
              placeholder="Class Name"
              {...register("name", { required: true, maxLength: 120 })}
              className="input input-bordered w-full "
            />
          </div>

          <div className="form-control w-1/2 mb-4">
            <label className="label">
              <span className="label-text font-semibold">Class Image URL*</span>
            </label>
            <input
              type="text"
              placeholder="Class Name"
              {...register("image", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <div className="flex ">
          <div className="form-control w-1/2 mr-4">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>

          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Available seats*</span>
            </label>
            <input
              type="number"
              {...register("available_seats", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <input
          className="btn btn-block bg-sky-500 text-white mt-4"
          type="submit"
          value="Add Class"
        />
      </form>
    </div>
  );
};

export default AddClass;
