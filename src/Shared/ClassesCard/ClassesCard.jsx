const ClassesCard = () => {
  return (
    <div>
      {/* <!-- Classes Cards --> */}
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
        <div className="bg-sky-200 rounded-xl">
          <div className="flex flex-col p-8 rounded-xl bg-white shadow-2xl translate-x-4 translate-y-4 w-96 md:w-auto">
            <img
              src="https://www.japan-academy.in/blog/wp-content/uploads/2021/04/Difference-between-Hiragana-and-Katakana-in-Japanese-Language.jpg"
              className="w-80 rounded-xl"
            />
            <div className="mt-3 mb-1 font-semibold text-2xl">
              Basic Japanese Course
            </div>
            <div className="text-xl font-medium mb-4">
              by <span className="text-blue-600">Mr.Tomiyoka</span>
            </div>
            <div className="my-2">
              <span className="font-bold text-base">Only Available :</span>
              <span className="font-light text-sm"> 9 seats</span>
            </div>

            <div className="mb-2">
              <span className="font-bold text-base">$ 299-</span>
              <span className="font-light text-sm">/ For Full Course</span>
            </div>

            <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
