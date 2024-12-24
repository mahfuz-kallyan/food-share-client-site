import Banner from "./Banner";
import FeaturedFoods from "./FeaturedFoods";
import NewFoods from "./NewFoods";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedFoods></FeaturedFoods>
            <NewFoods></NewFoods>
        </div>
    );
};

export default Home;