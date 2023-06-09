import { FaCrown, FaUserNinja } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const WhyBest = () => {
  return (
    <div className="text-sky-600 bg-sky-100 mb-16">
      <div className="flex justify-center w-full">
        <h1 className="font-bold text-6xl text-center mt-24 pt-16 font-mono uppercase flex mx-auto">
          <FaCrown className="me-4 invisible md:visible"></FaCrown> Why we are
          the Best
        </h1>
      </div>
      <p className="font-bold mt-3 font-mono w-2/3 md:w-1/2 mx-auto text-center text-sky-500">
        Embrace the Power of Words, Discover the Joy of Communication: At
        Chit-Chat Academy, we believe that language holds the key to connection,
        understanding, and limitless possibilities.
      </p>

      <Slide>
        <div className="lg:flex pb-40 pt-16 px-12 md:px-32 bg-sky-100 grid w-full place-items-center">
          <div className="card text-blue-800 w-96 mx-6  bg-base-100 shadow-xl my-6 md:my-0">
            <div className="card-body">
              <h2 className="card-title">
                {" "}
                <FaUserNinja /> Best Instructors
              </h2>
              <p>
                We provide the best instructors. Who can really make a
                difference while learning a new language.Our highly qualified
                and experienced instructors are native speakers or bilingual
                experts who are passionate about teaching and dedicated to
                helping students achieve their language goals.
              </p>
            </div>
          </div>

          <div className="card text-blue-800 w-96 mx-6  bg-base-100 shadow-xl my-6 md:my-0">
            <div className="card-body">
              <h2 className="card-title">
                <FaUsers /> Friendly Community
              </h2>
              <p>
                We also offer flexible learning options. Students can choose
                from group classes, private lessons, online courses, or a
                combination of these formats. Our small class sizes ensure
                personalized attention for students to practice speaking and
                receive feedback from their instructors.
              </p>
            </div>
          </div>

          <div className="card text-blue-800 mx-6 w-96 bg-base-100 shadow-xl my-6 md:my-0">
            <div className="card-body">
              <h2 className="card-title">
                <FaHandsHelping /> Care and Support
              </h2>
              <p>
                Whether you are a beginner looking to build a solid foundation
                or an advanced learner aiming to refine your language skills,
                Chit-Chat Academy is the perfect place for you. Join us on a
                language learning journey that is not only educational but also
                fun and inspiring. Start chit-chatting Academy today!
              </p>
            </div>
          </div>

          <div className="card text-blue-800 mx-6 w-96 bg-base-100 shadow-xl my-6 md:my-0">
            <div className="card-body">
              <h2 className="card-title">
                <FaBookOpen /> Unique Learning
              </h2>
              <p>
                We understand that language is not just about grammar and
                vocabulary but also about cultural understanding and effective
                communication. Our classes are designed to be interactive,
                combining traditional teaching methods with modern technology
                and interactive activities.{" "}
              </p>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default WhyBest;
