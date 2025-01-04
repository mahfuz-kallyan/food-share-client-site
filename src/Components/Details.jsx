import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const foods = useLoaderData()

    const {
		foodName,
		foodImage,
		foodQuantity,
		notes,
		donator,
		pickupLocation,
		expireDateTime,
		foodStatus,
		_id,
    } = foods;
    
    return (
		<div className="mx-auto space-y-12">
			<h2 className="text-4xl font-semibold text-center my-8">
				Food Details
			</h2>
			<div className="card card-compact bg-base-100 w-4/6 shadow-xl mx-auto">
				<figure>
					<img
						className=" aspect-[0.75] object-cover hover:scale-110 transition-all duration-500"
						src={foodImage}
						alt="Shoes"
					/>
				</figure>
				<div className="mt-3 flex justify-between items-center px-6">
					<div className="flex items-center gap-2">
						<img
							className="w-16 rounded-lg"
							src={donator.image}
							alt=""
						/>
						<p className="text-lg font-semibold text-[#94c341]">
							{donator.name}
						</p>
					</div>
					<p className="text-xl font-medium text-[#94c341]">
						{donator.email}
					</p>
				</div>
				<div className="card-body space-y-2 px-6 mt-4">
					<h2 className="card-title">{foodName}</h2>
					<p className="text-xl font-medium">
						Notes:{" "}
						<span className="text-[#94c341] font-semibold">
							{notes}
						</span>
					</p>
					<p className="text-xl font-medium">
						Quantity:{" "}
						<span className="text-[#94c341] font-semibold">
							{foodQuantity}
						</span>
					</p>
					<p className="text-xl font-medium">
						PickUp Location:{" "}
						<span className="text-[#94c341] font-semibold">
							{pickupLocation}
						</span>
					</p>
					<p className="text-xl font-medium">
						Date:{" "}
						<span className="text-[#94c341] font-semibold">
							{expireDateTime}
						</span>
					</p>
					<p className="text-xl font-medium">
						Food Status:{" "}
						<span className="text-[#94c341] font-semibold">
							{foodStatus}
						</span>
					</p>
					<div className="card-actions justify-center py-3">
						<button className="btn bg-[#94c341]">
							View Details
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;