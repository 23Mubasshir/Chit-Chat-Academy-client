import useTitle from "../../../Hooks/useTitle";
import Banner from "../Banner/Banner";

const Home = () => {
    useTitle('Chit-Chat Academy | Home');
    return (
        <div>
            <Banner></Banner>
            <h1>This is home</h1>
        </div>
    );
};

export default Home;