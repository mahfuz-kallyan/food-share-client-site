import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import RequestModal from "./Request";

const Details = () => {
	const foods = useLoaderData();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const {
		name,
		photo,
		quantity,
		notes,
		location,
		expireDate,
		status,
		donator,
		image,
		email,
		_id,
	} = foods;

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="mx-auto space-y-12">
			<h2 className="text-4xl font-semibold text-center my-8">
				Food Details
			</h2>
			<div className="card card-compact bg-base-100 w-4/6 shadow-xl mx-auto">
				<figure>
					<img
						className="aspect-[0.75] object-cover hover:scale-110 transition-all duration-500"
						src={photo}
						alt={name}
					/>
				</figure>
				<div className="mt-3 flex justify-between items-center px-6">
					<div className="flex items-center gap-2">
						<img
							className="w-16 rounded-lg"
							src={image}
							alt="Donator"
						/>
						<p className="text-lg font-semibold text-[#94c341]">
							{donator}
						</p>
					</div>
					<p className="text-xl font-medium text-[#94c341]">
						{email}
					</p>
				</div>
				<div className="card-body space-y-2 px-6 mt-4">
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
						<button
							onClick={openModal}
							className="btn bg-[#94c341]"
						>
							Request Food
						</button>
					</div>
				</div>
			</div>

			{isModalOpen && (
				<RequestModal food={foods} closeModal={closeModal} />
			)}
		</div>
	);
};

export default Details;
