import img from "../../assets/images/SingIn.jpg";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
 import { useContext, useState } from "react";
import useTitle from "../../Hooks/useTitle";
import "./SignIn.css"
import { AuthContext } from "../../Providers/AuthProvider";
import {useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  useTitle('Anime ToyWorld | Sign In');

//   ----- Navigate After login -----
  const navigate = useNavigate();
  const location = useLocation();
  console.log('login page location', location)
  const from = location.state?.from?.pathname || '/'

  // -----Success and error message -----
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // -----Regular Sign In-----
  const handleSignIn = () => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setError("");
    form.reset();

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("User has been signed in Successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  //  < ----- Google Sign-in ----->
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        // Signed in
        const loggedUser = result.user;
        // navigate(from, { replace: true });
        console.log(loggedUser);
        setError("");
        setSuccess("User has been Signed In Successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen sign-in-background">
      
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 py-6 lg:mr-20">
            <img src={img} alt="" className="rounded-2xl shadow-2xl" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 h-[620px]">
            <div className="card-body">
              <h1 className="text-5xl font-bold text-center">Sign In</h1>
              <form onSubmit={handleSignIn}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="Password"
                    placeholder="Your Password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <p>
                      Don&apos;t have an account ?{" "}
                      <Link className="text-orange-500" to="/sign-up">
                        Sign Up
                      </Link>
                    </p>
                  </label>
                  {/* <-----Error and Success message-----> */}
                  <p
                    className=" text-green-400 font-bold
                  "
                  >
                    {success}
                  </p>
                  <p className="text-red-400  font-bold">{error}</p>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Sign In"
                    className="btn btn-success"
                  />
                </div>
              </form>
              {/* -----Google Sign In---- */}
              <div className="">
                <h1 className="text-center pt-3">OR</h1>
                <h1 className="pb-3 text-neutral-500">Sign In with </h1>
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-success btn-block"
                >
                  <FaGoogle />
                  <span className="mx-2"> Google</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
