import { Slide } from "react-awesome-reveal";
import { FaMoneyCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin";
import useInstructor from "../../../Hooks/useInstructor";

const Payment = () => {
    //redirect if not user
    const navigate = useNavigate();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    if (isAdmin || isInstructor) {
      navigate("/");
    }
  return (
    <div>
      <Slide>
        <h1 className="font-bold text-6xl text-center pt-12 font-mono uppercase text-sky-800 flex mb-12">
          <FaMoneyCheck className="me-5" />
          Payment
        </h1>
      </Slide>
    </div>
  );
};

export default Payment;
