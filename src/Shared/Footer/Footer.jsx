import logo from "../../assets/images/logo.png";
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer className="footer lg:footer-center p-10 bg-[#90ee904f] text-primary-content">
        
      {/* -----Row-1:LoGO----- */}
      <div>
        <div className="flex text-left">
          <img className="w-1/3 md:w-48 lg:ml-12 mr-3" src={logo} alt="" />
          <h1 className="md:text-5xl text-2xl mt-8 font-bold text-green-600 mb-4">
            Chit-Chat <br /><span className="md:text-6xl text-green-800">Academy</span>
          </h1>
        </div>
      </div>

      {/* -----Row-2: Info----- */}
      <div className="footer text-base-content">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Courses</a>
          <a className="link link-hover">Tuition</a>
          <a className="link link-hover">Notes</a>
          <a className="link link-hover">Audio books</a>
        </div>
        <div>
          <span className="footer-title">Contact Info</span>
          <a className="link link-hover">Phone: 012834838</a>
          <a className="link link-hover">Phone: 012131323</a>
          <a className="link link-hover">Gmail: ChitChat@gamil.com</a>
          <a className="link link-hover">Facebook: @ChitChat</a>
        </div>
        <div>
          <span className="footer-title">Store Address</span>
          <a className="link link-hover">Store-1: xyz-street, 12/A,Tokyo</a>
          <a className="link link-hover">Store-2: mno-street, 789/A,New-yoyk</a>
          <a className="link link-hover">Store-3: erwe-street, 789/A,Berlin</a>
          <a className="link link-hover">Store-4: qwz-street, 15/A,London</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn bg-green-800 text-base-200 absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* -----Row-3: Copyright and Social media links----- */}
    </footer>
    <footer>
        <div className="footer items-center py-6 px-32 bg-[#418f5b] text-white">
        <div className="items-center grid-flow-col md:justify-self-start">
          <p>Copyright © 2023 - All right reserved</p>
        </div>

        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="#twitter">
            <FaTwitter size={30} />
          </a>
          <a href="#youtube">
            <FaYoutube size={30} />
          </a>
          <a href="#facebook">
            <FaFacebook size={30} />
          </a>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;