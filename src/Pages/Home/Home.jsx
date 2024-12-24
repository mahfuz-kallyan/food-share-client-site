import Banner from "./Banner";
import FeaturedFoods from "./FeaturedFoods";
import NewFoods from "./NewFoods";
import Subscribe from "./Subscribe";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedFoods></FeaturedFoods>
            <NewFoods></NewFoods>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;