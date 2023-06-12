import { useEffect } from "react";
import { useState } from "react";
import ClassesCard from "../../Shared/ClassesCard/ClassesCard";
import useTitle from "../../Hooks/useTitle";
const Classes = () => {
  useTitle('Chit-Chat Academy | Classes');

  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("https://assignment-12-server-silk-seven.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);

  return (
    
    <div>
        
      <div className="flex justify-center w-full text-sky-600 bg-sky-100 my-8">
        <h1 className="font-bold text-6xl text-center  py-12 font-mono uppercase flex mx-auto ">
         ------- Classes --------
        </h1>
      </div>
      

      <div className="grid md:grid-cols-3 gap-10 my-16 mx-56">
        {classes.map((props) => (
          <ClassesCard key={props._id} props={props}></ClassesCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
