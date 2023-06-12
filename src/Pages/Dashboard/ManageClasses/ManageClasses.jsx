import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
// import { useState } from "react";

const ManageClasses = () => {
  // const [feedback, setFeedback] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/AllClasses");
    return res.data;
  });
  const handleApprove = (item) => {
    fetch(`http://localhost:5000/classApproved/admin/${item._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `This Class is Approved !`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleDeny = (item) => {
    fetch(`http://localhost:5000/classDenied/admin/${item._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `This Class is Denied !`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleFeedback = (item) => {
    console.log(item);
    Swal.fire({
      title: "Feedback",
      text: "Write Your Feedback",
      input: "text",
      showCancelButton: true,
    }).then((result) => {
        const feedback=result.value;
        const updatedFeedback = {feedback};
        console.log(updatedFeedback)
        fetch(`http://localhost:5000/update-feedback/${item._id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedFeedback),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
    });
  };

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
                <td>$ {item?.price}</td>
                <td>{item?.role}</td>
                <td>
                  <div className="flex flex-col gap-1">
                    {item.role == "approved" || item.role == "denied" ? (
                      <button
                        disabled
                        className="btn btn-xs btn-success disabled"
                      >
                        Approve
                      </button>
                    ) : (
                      <button
                        onClick={() => handleApprove(item)}
                        className="btn btn-xs btn-success"
                      >
                        Approve
                      </button>
                    )}

                    {item.role == "approved" || item.role == "denied" ? (
                      <button disabled className="btn btn-xs disabled">
                        Deny
                      </button>
                    ) : (
                      <button
                        onClick={() => handleDeny(item)}
                        className="btn btn-xs btn-error"
                      >
                        Deny
                      </button>
                    )}

                    <button
                      onClick={() => handleFeedback(item)}
                      className="btn btn-xs btn-info"
                    >
                      Feedback
                    </button>
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
