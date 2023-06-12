import { useNavigate } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin";
import useInstructor from "../../../Hooks/useInstructor";

const EnrolledClasses = () => {
  //redirect if not user
  const navigate = useNavigate();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  if (isAdmin || isInstructor) {
    navigate("/");
  }
  return (
    <div>
      <h1>My Enrolled Classes</h1>
    </div>
  );
};

export default EnrolledClasses;
