import React from "react";
import { useNavigate } from "react-router-dom";

const FoodsCard = ({ food }) => {
    const navigate = useNavigate()
	const {
		name,
		photo,
		quantity,
		notes,
		location,
		expireDate,
        status,
        _id
    } = food;
    
    const handleDetails = () => {
        navigate(`/details/${_id}`)
    }

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="card card-compact bg-base-100  shadow-xl">
				<figure>
					<img
						className="w-96 aspect-[0.75] object-cover hover:scale-110 transition-all duration-500"
						src={photo}
						alt="Food Image"
					/>
				</figure>
				<div className="card-body space-y-2">
					<h2 className="card-title">{name}</h2>
					<p className="text-xl font-medium">
						Notes:{" "}
						<span className="text-[#94c341] font-semibold">
							{notes}
						</span>
					</p>
					<p className="text-xl font-medium">
						Quantity:{" "}
						<span className="text-[#94c341] font-semibold">
							{quantity}
						</span>
					</p>
					<p className="text-xl font-medium">
						PickUp Location:{" "}
						<span className="text-[#94c341] font-semibold">
							{location}
						</span>
					</p>
					<p className="text-xl font-medium">
						Date:{" "}
						<span className="text-[#94c341] font-semibold">
							{expireDate}
						</span>
					</p>
					<p className="text-xl font-medium">
						Food Status:{" "}
						<span className="text-[#94c341] font-semibold">
							{status}
						</span>
					</p>
					<div className="card-actions justify-center py-3">
						<button onClick={handleDetails} className="btn bg-[#94c341]">
							View Details
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoodsCard;
