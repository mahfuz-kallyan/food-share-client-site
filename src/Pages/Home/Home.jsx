import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import FeaturedFoods from "./FeaturedFoods";
import NewFoods from "./NewFoods";
import Subscribe from "./Subscribe";
import Recipe from "./Recipe";
import AddPost from "./AddPost";
import Delivery from "./Delivery";


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
            <AddPost></AddPost>
            <Delivery></Delivery>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;