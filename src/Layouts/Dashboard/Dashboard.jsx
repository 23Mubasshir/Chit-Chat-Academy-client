import { Slide, Zoom } from "react-awesome-reveal";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {FaBookReader, FaClipboardCheck, FaClipboardList, FaHome, FaUserTie } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-sky-100 text-base-content">
            {/* Sidebar content here */}

            {/* ----- LoGO----- */}
            <div>
              <Zoom>
                <div className="flex text-left my-12">
                  <img className="w-32" src={logo} alt="" />
                  <h1 className="text-2xl mt-8 font-bold text-sky-500 mb-4">
                    Chit-Chat <br />
                    <span className="text-blue-800">Academy</span>
                  </h1>
                </div>
              </Zoom>
            </div>
            <Slide>
              <li className="mx-2 mt-1 md:mt-5  md:text-xl font-bold bg-sky-500 text-white rounded-lg">
                <Link to="/dashboard/selected-Classes"><FaClipboardList/>My Selected Classes</Link>
              </li>
            </Slide>
            <Slide>
              <li className="mx-2 mt-1 md:mt-5  md:text-xl font-bold bg-sky-500 text-white rounded-lg">
                <Link to="/"><FaClipboardCheck/>My Enrolled Classes</Link>
              </li>
            </Slide>

            <div className="divider my-6"></div>
            <Slide>
              <li className="mx-2 mt-1 md:mt-5  md:text-xl font-bold bg-sky-500 text-white rounded-lg">
                <Link to="/"><FaHome/>Home</Link>
              </li>
            </Slide>

            <Slide>
              <li className="mx-2 mt-1 md:mt-5 md:text-xl font-bold bg-sky-500 text-white rounded-lg">
                <Link to="/instructors"><FaUserTie/>Instructors</Link>
              </li>
            </Slide>
            <Slide>
              <li className="mx-2 mt-1 md:mt-5 md:text-xl font-bold bg-sky-500 text-white rounded-lg">
                <Link to="/classes"><FaBookReader/>Classes</Link>
              </li>
            </Slide>
            {/* <Slide></Slide>
            <Slide></Slide>
            <Slide></Slide> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
