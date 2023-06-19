const Details = () => {
  return (
    <div className="md:mx-72 mx-12 md:flex justify-center" >
      <div className="w-1/2 mt-24" >
        <h1 className="font-bold text-5xl py-12 line leading-tight" >Learn different languages in a fun way with chit chat.</h1>
        <p className="text-lg">
        Embrace the Power of Words, Discover the Joy of Communication: At Chit-Chat Academy, we believe that language holds the key to connection, understanding, and limitless possibilities.
        </p>
        <button className="btn btn-info mt-8 mr-4 text-white rounded-lg font-bold">Learn More</button>
        <button className="btn btn-outline btn-info mt-8 text-white rounded-lg font-bold">View Classes </button>
      </div>
      <img className="w-[500px]" src="https://img.freepik.com/free-vector/flat-international-mother-language-day-illustration_23-2149219243.jpg?w=2000" alt="" />
    </div>
  );
};

export default Details;
