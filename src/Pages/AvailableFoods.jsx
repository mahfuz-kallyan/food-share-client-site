import { useLoaderData } from "react-router-dom";
import FoodsCard from "../Components/FoodsCard";
import { Helmet } from "react-helmet-async";

const AvailableFoods = () => {
	const foods = useLoaderData();
	return (
		<div className="mx-auto">
			<Helmet>
				<title>All Foods | FoodShare | FoodShare</title>
			</Helmet>
			<h2 className="text-4xl font-semibold my-8 text-center">
				Available foods
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-11/12 mx-auto my-14">
				{foods.map((food) => (
					<FoodsCard key={food._id} food={food}></FoodsCard>
				))}
			</div>
		</div>
	);
};

export default AvailableFoods;
