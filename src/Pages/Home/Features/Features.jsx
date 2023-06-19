 import { FiBookOpen, FiDownloadCloud, FiUsers, FiVideo } from "react-icons/fi";

const Features = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Master your communication skills with us.
            </h1>
            <p className="lg:w-1/2 mx-auto leading-relaxed text-base">
            Join us on this transformative journey, and let your words ignite connections that transcend borders at Chit-Chat Academy, where language is the bridge that brings people together.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <FiDownloadCloud className="text-sky-500 w-12 h-12 mb-3 inline-block"  ></FiDownloadCloud>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  2.7K
                </h2>
                <p className="leading-relaxed">Downloads</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <FiUsers className="text-sky-500 w-12 h-12 mb-3 inline-block"></FiUsers>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  1.3K
                </h2>
                <p className="leading-relaxed">Users</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <FiBookOpen className="text-sky-500 w-12 h-12 mb-3 inline-block"></FiBookOpen>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  74
                </h2>
                <p className="leading-relaxed">classes</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <FiVideo className="text-sky-500 w-12 h-12 mb-3 inline-block"></FiVideo>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  460
                </h2>
                <p className="leading-relaxed">videos</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
