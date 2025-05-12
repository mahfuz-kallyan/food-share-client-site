import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import FeaturedFoods from "./FeaturedFoods";
import NewFoods from "./NewFoods";
import Subscribe from "./Subscribe";
import Recipe from "./Recipe";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | FoodShare</title>
            </Helmet>
            <Banner></Banner>
            <FeaturedFoods></FeaturedFoods>
            <NewFoods></NewFoods>
            <Recipe></Recipe>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;