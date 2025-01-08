import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FeaturedFoods = () => {
	const [foods, setFoods] = useState([]);
	

	useEffect(() => {
		fetch("https://food-share-server-jade.vercel.app/featured")
			.then((res) => res.json())
			.then((data) => setFoods(data))
			.catch((err) => console.log(err));
	}, [])


    return (
		<div className="mx-auto py-14 flex flex-col justify-center">
			<h2 className="text-4xl font-semibold text-center">
				Featured Foods
			</h2>
			<div className=" px-2 lg:px-14 flex justify-between items-center my-6">
				<div></div>
				<div></div>
				<div>
					<Link to={"/available"}>
						<button className="btn bg-[#94c341] ">Show All</button>
					</Link>
				</div>
			</div>
			<div className="mx-auto p-2 lg:p-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{foods.map((food) => (
					<div className="card card-compact bg-base-100 w-96 shadow-xl">
						<figure>
							<img
								className="w-96 aspect-[0.75] object-cover hover:scale-110 transition-all duration-500"
								src={food.photo}
								alt="Food Image"
							/>
						</figure>
						<div className="card-body space-y-2">
							<h2 className="card-title">{food.name}</h2>
							<p className="text-xl font-medium">
								Notes:{" "}
								<span className="text-[#94c341] font-semibold">
									{food.notes}
								</span>
							</p>
							<p className="text-xl font-medium">
								Quantity:{" "}
								<span className="text-[#94c341] font-semibold">
									{food.quantity}
								</span>
							</p>
							<p className="text-xl font-medium">
								PickUp Location:{" "}
								<span className="text-[#94c341] font-semibold">
									{food.location}
								</span>
							</p>
							<p className="text-xl font-medium">
								Date:{" "}
								<span className="text-[#94c341] font-semibold">
									{food.expireDate}
								</span>
							</p>
							<p className="text-xl font-medium">
								Food Status:{" "}
								<span className="text-[rgb(148,195,65)] font-semibold">
									{food.status}
								</span>
							</p>
							<div className="card-actions justify-center py-3">
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default FeaturedFoods;