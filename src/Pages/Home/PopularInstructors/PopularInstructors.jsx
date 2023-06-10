import { FaTh } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import InstructorsCard from "../../../Shared/InstructorsCard/InstructorsCard";

const PopularInstructors = () => {
  const [Instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      });
  }, []);

  return (
    <div>
      <div className="my-5 mb-32 bg-white md:mx-32">
        <div className="p-10 rounded-xl">
          {/* <!-- headers content--> */}

          <Slide>
          <h1 className="font-bold text-6xl text-start pt-12 font-mono uppercase text-sky-800 flex">
            <FaTh className="me-5" />
            Top Instructors
          </h1>
          </Slide>
          <Fade>
          <p className="font-bold mt-3 font-mono w-2/3 md:w-1/2  text-start text-sky-500 md:ms-20 ms-16">
            Join us on this transformative journey, and let your words ignite connections that transcend borders at Chit-Chat Academy, where language is the bridge that brings people together.
          </p>
          </Fade>


          {/* Instructor Card */}
          <div className="grid md:grid-cols-2 
          lg:grid-cols-3
          gap-10 my-16 lg:mx-32">
          {Instructors.slice(0, 6).map((props) => (
            <InstructorsCard key={props._id} props={props}></InstructorsCard>
          ))}
        </div>
          
        </div>

        {/* <!-- All Classes Button --> */}
        <div className="flex justify-center">
            <Link
              to="/instructors"
              className="bg-sky-500 text-white px-4 rounded-2xl py-3 font-bold"
            >
              See All Instructors
            </Link>
          </div>
      </div>
    </div>
  );
};

export default PopularInstructors;
