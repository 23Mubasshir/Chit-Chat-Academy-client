import { FaTh } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";

const PopularInstructors = () => {
  return (
    <div>
      <div className="my-5 mb-32 bg-white mx-32">
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
          <div className="max-w-sm mx-auto my-10 bg-white rounded-lg shadow-2xl p-5">
            <img
              className="w-60  rounded-full mx-auto"
              src="https://picsum.photos/200"
              alt="Profile picture"
            />
            <h2 className="text-center text-2xl font-semibold mt-3">
            Mr.Tomiyoka
            </h2>
            <p className="text-center text-gray-600 font-bold mt-1">Japanese Teacher</p>
            <div className="mt-2 text-center">
              <p className="text-gray-600 mt-2 w-4/5 mx-auto">
              Mr.Tomiyoka is a Japanese Teacher with over 10 years of experience in
                teaching Japanese Language.
              </p>
            </div>

            <h2 className="text-center text-xl font-semibold mt-4">
            Contact
            </h2>

            <div className="flex justify-center mt-2">
              <a href="#" className="text-blue-500 hover:text-blue-700 mx-2">
                Twitter
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700 mx-2">
                LinkedIn
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700 mx-2">
                Facebook
              </a>
            </div>
            <h2 className="text-center font-semibold mt-1">
            Gmail: <a href="#" className="text-blue-500 hover:text-blue-700 mx-2">
            Tomiyoka@gmail.com
              </a> 
            </h2>
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
