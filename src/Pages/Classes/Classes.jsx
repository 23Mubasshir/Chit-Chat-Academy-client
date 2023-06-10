import { useEffect } from "react";
import { useState } from "react";
import ClassesCard from "../../Shared/ClassesCard/ClassesCard";
const Classes = () => {
  const [classes, setClasses] = useState([]);
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        // setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-10 my-16 mx-56">
        {classes.map((props) => (
          <ClassesCard key={props._id} props={props}></ClassesCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
