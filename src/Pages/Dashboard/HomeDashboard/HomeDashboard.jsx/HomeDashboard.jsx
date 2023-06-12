import { Fade, Slide } from "react-awesome-reveal";
import { FaHome } from "react-icons/fa";

const HomeDashboard = () => {
    return (
        <div>
            <Slide>
            <h1 className="font-bold text-6xl text-start pt-12 font-mono uppercase text-sky-800 flex">
              <FaHome className="me-5" />
              Welcome to the Home
            </h1>
          </Slide>
          <Fade>
            <p className="font-bold mt-3 font-mono w-2/3 md:w-1/2  text-start text-sky-500 md:ms-20 md:ms-16">
              Step into our vibrant community of learners, where fluency is
              unlocked, conversations come alive, and the world becomes your
              playground.
            </p>
          </Fade>
        </div>
    );
};

export default HomeDashboard;