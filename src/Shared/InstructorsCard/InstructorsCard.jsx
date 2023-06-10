
const InstructorsCard = ({props}) => {
    const { instructor_name, image, instructor_email} = props;


    return (
        <div>
            {/* Instructor Card */}
          <div className="max-w-sm mx-auto my-10 bg-gray-100 rounded-lg shadow-2xl p-5 h-[560px] flex-col justify-around ">
            <img
              className="w-full mx-auto rounded-2xl shadow-xl object-cover h-[250px] "
              src={image}
              alt="Profile picture"
            />
            <h2 className="text-center text-2xl font-semibold mt-3">
            {instructor_name}
            </h2>
            <p className="text-center text-gray-600 font-bold mt-1"> Teacher</p>
            <div className="mt-2 text-center">
              <p className="text-gray-600 mt-2 w-4/5 mx-auto">
              {instructor_name} is an amazing Instructor with a great way of teaching. 
              </p>
            </div>

            <h2 className="text-center text-xl font-semibold mt-4">
            Contact
            </h2>

            <div className="flex justify-center mt-2">
              <a href="#" className="text-blue-500 hover:text-blue-700 mx-2">
                Twitter
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700 mx-2">
                LinkedIn
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700 mx-2">
                Facebook
              </a>
            </div>
            <h2 className="text-center font-semibold mt-1">
            Gmail: <a href="#" className="text-blue-500 hover:text-blue-700 mx-2">
            {instructor_email}
              </a> 
            </h2>
          </div>
        </div>
    );
};

export default InstructorsCard;