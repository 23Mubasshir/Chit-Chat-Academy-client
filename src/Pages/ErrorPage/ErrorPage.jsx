import useTitle from "../../Hooks/useTitle.js";
import img from "../../assets/images/ErrorPage.png"
import { Link } from "react-router-dom";

const ErrorPage = () => {
  useTitle('Anime ToyWorld | Error Page');
  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row md:p-20 bg-green-300 shadow-2xl rounded-xl">
          <img
            src={img}
            className="max-w-2xl"
          />
          <div className="ml-12">
            <h1 className="text-8xl font-bold text-green-900 mb-4">Hello !!!</h1>
            <h1 className="text-4xl font-bold text-green-900 my-1 mb-14">Nothing to see here close the page.</h1>
            <p className="py-6 text-2xl text-green-900 font-medium">You have come to a page that doesn&apos;t exist. Now go home. </p>
            <Link className="btn btn-lg font-bold bg-green-800 btn-block text-base-200" to="/">Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;