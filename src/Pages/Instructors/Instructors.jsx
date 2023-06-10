import { useEffect } from "react";
import { useState } from "react";
import InstructorsCard from "../../Shared/InstructorsCard/InstructorsCard";
  

const Instructors = () => {
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
      <div>
        <div className="flex justify-center w-full text-sky-600 bg-sky-100 my-8">
          <h1 className="font-bold text-6xl text-center  py-12 font-mono uppercase flex mx-auto ">
           -------- Instructors --------
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-10 my-16 mx-56">
          {Instructors.map((props) => (
            <InstructorsCard key={props._id} props={props}></InstructorsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
