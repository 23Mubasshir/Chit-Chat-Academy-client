// import { useContext } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
// import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
const user = false;
  //* <-----Log-out function-----> */
//   const handleLogout = () => {
//     logOut()
//       .then(() => {})
//       .catch((error) => console.error(error));
//   };
//   console.log(user);

  const navItems = (
    <>
      <li className="mx-2 text-xl font-medium">
        <Link to="/">Home</Link>
      </li>
      <li className="mx-2 text-xl font-medium">
        <Link to="/instructors">Instructors</Link>
      </li>
      <li className="mx-2 text-xl font-medium">
        <Link to="/classes">Classes</Link>
      </li>
      {user ? (
        <li className="mx-2 text-xl font-medium">
          <Link to="/dashboard">Dashboard</Link>
        </li>
      ) : (
        <div></div>
      )}
      
    </>
  );
  return (
    <div>
      <div className="navbar bg-[#90ee904f]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/">
            <img className="w-16 py-3 lg:ml-24 mr-3" src={logo} alt="" />
          </Link>
          <Link to="/">
            <h1 className="text-xl mt-3 font-bold text-green-600 mb-4">
            Chit-Chat  <br /> <span className="text-2xl text-green-800">Academy</span>
            </h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end lg:mr-20">
          {/* -----conditional user picture----- */}
          {user ? (
            <Link to="/" className="mr-5">
              {user.photoURL ? (
                <div className="tooltip" data-tip={user.displayName}>
                  <img
                    style={{ height: "55px" }}
                    className="rounded-full border-4 border-violet-900"
                    src={user.photoURL}
                    alt={user.displayName}
                  />
                </div>
              ) : (
                <FaRegUserCircle style={{ fontSize: "2.5rem" }} />
              )}
            </Link>
          ) : (
            <div></div>
          )}

          {/* -----conditional sign in sign out----- */}
          {user ? (
            <Link
            //   onClick={handleLogout}
              className="btn btn-outline font-extrabold border-4 border-[#bg-#90ee904f] hover:bg-green-800 rounded-md mr-5"
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/sign-in"
              className="btn btn-outline font-extrabold text-green-800 border-4 border-green-800 hover:bg-green-800 rounded-md mr-5"
            >
              Sign In
            </Link>
          )}
          {/* -----conditional sign Up----- */}
          {user ? (
            <div></div>
          ) : (
            <Link
              to="/sign-up"
              className="btn btn-outline font-extrabold text-green-800 border-4 border-green-800 hover:bg-green-800 rounded-md mr-5"
            >
              Sign Up
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;