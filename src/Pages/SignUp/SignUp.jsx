import { Link } from "react-router-dom";
import img from "../../assets/images/SignUp.jpg";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
import useTitle from "../../Hooks/useTitle";
import { useForm } from "react-hook-form";

const SignUp = () => {
  useTitle("Anime ToyWorld | Sign Up");
  const { createUser, signInWithGoogle, userProfileUpdating, setUser } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();

  //  < ----- Regular Sign-Up ----->
  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const createdUser = result.user;

      userProfileUpdating(createdUser, data.name, data.photoURL).then(() =>{
        setUser({...createdUser, displayName : data.name, photoURL : data.photoURL});
      });

      // userProfileUpdating(data.name, data.photoURL)
      //   .then(() => {
      //   //   const saveUser = { name: data.name, email: data.email };
      //   //   fetch("https://bistro-boss-server-fawn.vercel.app/users", {
      //   //     method: "POST",
      //   //     headers: {
      //   //       "content-type": "application/json",
      //   //     },
      //   //     body: JSON.stringify(saveUser),
      //   //   })
      //   //     .then((res) => res.json())
      //   //     .then((data) => {
      //   //       if (data.insertedId) {
      //   //         reset();
      //   //         Swal.fire({
      //   //           position: "top-end",
      //   //           icon: "success",
      //   //           title: "User created successfully.",
      //   //           showConfirmButton: false,
      //   //           timer: 1500,
      //   //         });
      //   //         navigate("/");
      //   //       }
      //   //     });
      //   })
      //   .catch((error) => console.log(error));
    });
  };

  //  < ----- Google Sign-up ----->
  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then((result) => {
        // Signed in
        const loggedUser = result.user;
        console.log(loggedUser);
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
          <div className="w-[770px] py-6 lg:mr-20">
            <img src={img} alt="" className="rounded-2xl shadow-2xl" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-5xl font-bold text-center">Sign Up</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-red-600 mt-2">
                      * Name is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    name="photo"
                    type="text"
                    placeholder="Your Photo URL"
                    className="input input-bordered"
                    {...register("photoURL", { required: true })}
                  />
                  {errors.photoURL && (
                    <span className="text-red-600 mt-2">
                      * Photo URL is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-600 mt-2">
                      * Email is required
                    </span>
                  )}
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
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                    })}
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600 ">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600 ">
                      Password must be 6 characters or more.
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600 ">
                      * Password must have <br/>
                      One Uppercase Character. <br/>
                      One Special Character. <br/>
                    </p>
                  )}
                  <label className="label">
                    <p>
                      Already have an account ?{" "}
                      <Link className="text-orange-500" to="/sign-in">
                        Sign In
                      </Link>
                    </p>
                  </label>
                  {/* <-----Error and Success message-----> */}
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Sign Up"
                    className="btn btn-success"
                  />
                </div>
              </form>
              {/* -----Google Sign In */}
              <div className="">
                <h1 className="text-center pt-3">OR</h1>
                <h1 className="pb-3 text-neutral-500">Sign Up with </h1>
                <button
                  onClick={handleGoogleSignUp}
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

export default SignUp;
