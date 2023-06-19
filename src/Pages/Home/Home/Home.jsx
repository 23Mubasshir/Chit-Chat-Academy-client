import useTitle from "../../../Hooks/useTitle";
import Banner from "../Banner/Banner";
import ClientReview from "../ClientReview/ClientReview";
import Details from "../Details/Details";
import Features from "../Features/Features";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import WhyBest from "../WhyBest/WhyBest";

const Home = () => {
    useTitle('Chit-Chat Academy | Home');
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Details></Details>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <WhyBest></WhyBest>
            <ClientReview></ClientReview>
        </div>
    );
};

export default Home;