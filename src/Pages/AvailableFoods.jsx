import { useLoaderData } from "react-router-dom";
import FoodsCard from "../Components/FoodsCard";
import { useState } from "react";


const AvailableFoods = () => {
    const foods = useLoaderData()
    return (
        <div className="mx-auto">
            <h2 className="text-4xl font-semibold my-8 text-center">Available foods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto my-14">
                {
                    foods.map(food => <FoodsCard key={food._id} food={food}></FoodsCard>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;