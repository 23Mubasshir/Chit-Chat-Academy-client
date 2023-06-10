import { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { FaTh } from "react-icons/fa";
import { Link } from "react-router-dom";
import ClassesCard from "../../../Shared/ClassesCard/ClassesCard";


const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {

        // Most enrolled classes
        const newData = data.sort((a, b) => parseFloat(a.available_seats) - parseFloat(b.available_seats)).slice(0,6); 
        setClasses(newData);
      });
  }, []);

  return (
    <>
      <div className="my-5 bg-white lg:mx-32">
        <div className="p-10 rounded-xl">
          {/* <!-- headers content--> */}

          <Slide>
            <h1 className="font-bold text-6xl text-start pt-12 font-mono uppercase text-sky-800 flex">
              <FaTh className="me-5" />
              Top Classes
            </h1>
          </Slide>
          <Fade>
            <p className="font-bold mt-3 font-mono w-2/3 md:w-1/2  text-start text-sky-500 md:ms-20 md:ms-16">
              Step into our vibrant community of learners, where fluency is
              unlocked, conversations come alive, and the world becomes your
              playground.
            </p>
          </Fade>

          {/* <!-- Classes Cards --> */}
          <div className="grid md:grid-cols-3 gap-10 my-16 lg:mx-32">
            {classes.map((props) => (
              <ClassesCard key={props._id} props={props}></ClassesCard>
            ))}
          </div>

          {/* <!-- All Classes Button --> */}
          <div className="flex justify-center">
            <Link
              to="/classes"
              className="mt-12 bg-sky-500 text-white px-4 rounded-2xl py-3 font-bold"
            >
              See All Classes
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularClasses;
