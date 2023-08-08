const Form = () => {
  return (
    <div className="flex justify-center items-center my-32">
      <div className="md:w-2/3">
        <div className="p-5 md:p-20 shadow-[0px_22px_100px_4px_rgba(0,0,0,0.3)] rounded-xl">
          <div className="p-10 md:p-0 md:mb-12">
            <div className="">
              <p className="text-[20px]">Upgrade Yourself With Us.</p>
              <h1 className="text-5xl font-semibold py-4">
                Have Any Questions?
              </h1>
            </div>
          </div>

          <form>
            {/* form name and price row */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2 mt-4">
                <label className="label">
                  <span className="label-text text-[20px]"> Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered w-full ms-1 mt-2 bg-gray-50"
                    required
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 md:ml-4 mt-4">
                <label className="label">
                  <span className="label-text text-[20px]">Email</span>
                </label>
                <label className="input-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="input input-bordered w-full ms-1 mt-2 bg-gray-50"
                    required
                  />
                </label>
              </div>
            </div>

            {/* form Photo row */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-full">
                <label className="label">
                  <span className="label-text text-[20px]">Message</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="Message"
                    placeholder="Your Message"
                    className="input input-bordered w-full ms-1 mt-2 bg-gray-50"
                  />
                </label>
              </div>
            </div>

            {/* button*/}
            <input type="submit" value="GET IN TOUCH" className="btn btn-info mt-8 text-white rounded-lg font-bold" />
          </form>
        </div>

        <div className="bg-info flex py-20 justify-center items-center w-full mt-16 rounded-xl">
            <h1 className="text-2xl px-12 md:text-4xl lg:text-5xl text-white md:pe-10 lg:pe-72">
              Having Any Trouble ?
            </h1>
            <button className="btn bg-white text-info me-12">Contact Support</button>
          </div>
      </div>
      
    </div>
  );
};

export default Form;
