import { Slide } from "react-awesome-reveal";
import { FaMoneyCheck } from "react-icons/fa";

const Payment = () => {
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
