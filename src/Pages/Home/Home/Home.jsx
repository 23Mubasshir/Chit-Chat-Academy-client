import useTitle from "../../../Hooks/useTitle";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import WhyBest from "../WhyBest/WhyBest";

const Home = () => {
    useTitle('Chit-Chat Academy | Home');
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <WhyBest></WhyBest>
        </div>
    );
};

export default Home;