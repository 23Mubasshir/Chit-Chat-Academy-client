import { Fade, Slide } from "react-awesome-reveal";
import { FaTh } from "react-icons/fa";
import { Link } from "react-router-dom";

const PopularClasses = () => {
  return (
    <>
      <div className="my-5 bg-white mx-32">
        <div className="p-10 rounded-xl">
          {/* <!-- headers content--> */}

          <Slide>
          <h1 className="font-bold text-6xl text-start pt-12 font-mono uppercase text-sky-800 flex">
          <FaTh className="me-5"/>Top Classes
          </h1>
          </Slide>
          <Fade>
          <p className="font-bold mt-3 font-mono w-2/3 md:w-1/2  text-start text-sky-500 md:ms-20 ms-16">
          Step into our vibrant community of learners, where fluency is unlocked, conversations come alive, and the world becomes your playground.
          </p>
          </Fade>
          {/* <!-- Classes Cards --> */}
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
            <div className="bg-sky-200 rounded-xl">
              <div className="flex flex-col p-8 rounded-xl bg-white shadow-2xl translate-x-4 translate-y-4 w-96 md:w-auto">
                <img
                  src="https://www.japan-academy.in/blog/wp-content/uploads/2021/04/Difference-between-Hiragana-and-Katakana-in-Japanese-Language.jpg"
                  className="w-80 rounded-xl"
                />
                <div className="mt-3 mb-1 font-semibold text-2xl">
                  Basic Japanese Course
                </div>
                <div className="text-xl font-medium mb-4">by <span className="text-blue-600" >Mr.Tomiyoka</span></div>
                <div className="my-2">
                  <span className="font-bold text-base">Only Available :</span>
                  <span className="font-light text-sm"> 9 seats</span>
                </div>

                <div className="mb-2">
                  <span className="font-bold text-base">$ 299-</span>
                  <span className="font-light text-sm">/ For Full Course</span>
                </div>

                <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                  Select
                </button>
              </div>
            </div>
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
