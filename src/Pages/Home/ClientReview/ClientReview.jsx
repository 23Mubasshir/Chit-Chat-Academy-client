const ClientReview = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold text-6xl text-center mt-24 pt-16 font-mono uppercase text-sky-600">
          What do Parents think about US
        </h1>
      </div>

      <div className="md:flex md:px-72 py-24">
        <div className="text-center pb-24">
            <img className="rounded-full w-[80px] mx-auto border-4 border-sky-500" src="https://i.ibb.co/xLytRsc/close-portrait-smiling-handsome-man-260nw-1011569245-1.jpg" alt="" />
            <p className="w-4/5 mx-auto py-4 text-lg">It is a great platform for learning new language. The classes were professional and very good. My Children love it.</p>
            <p className="text-lg font-bold" >Anna valuter - Teacher </p>
        </div>
        <div className="text-center pb-24">
            <img className="rounded-full w-[80px] mx-auto border-4 border-sky-500" src="https://i.ibb.co/3yq4g9g/close-portrait-smiling-handsome-man-260nw-1011569245.jpg" alt="" />
            <p className="w-4/5 mx-auto py-4 text-lg">I love this platform. My little boy just learned English and russian from here. Also he enjoys a lot learning from here.</p>
            <p className="text-lg font-bold" >John Hamilton - Product Enginer  </p>
        </div>
        <div className="text-center pb-24">
            <img className="rounded-full w-[80px] mx-auto border-4 border-sky-500" src="https://i.ibb.co/9wxKQMV/close-portrait-smiling-handsome-man-260nw-1011569245-2.jpg" alt="" />
            <p className="w-4/5 mx-auto py-4 text-lg">I was looking for a good Academy to teach my children Japanese and now after attending some classes they can now talk in Japanese.</p>
            <p className="text-lg font-bold" >Sara William - Accountant </p>
        </div>
        
      </div>
    </div>
  );
};

export default ClientReview;
