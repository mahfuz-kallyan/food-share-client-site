import React from "react";

const FoodsCard = ({ food }) => {
	const {
		foodName,
		foodImage,
		foodQuantity,
		notes,
		donator,
		pickupLocation,
		expireDateTime,
		foodStatus,
	} = food;

	return (
		<div>
			<div className="card card-compact bg-base-100 w-96 shadow-xl">
				<figure>
					<img
						className="w-96 aspect-[0.75] object-cover hover:scale-110 transition-all duration-500"
						src={foodImage}
						alt="Shoes"
					/>
				</figure>
				<div className="card-body space-y-2">
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

export default FoodsCard;
