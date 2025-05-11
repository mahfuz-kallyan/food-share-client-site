import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AuthContext from "../Context/AuthContext/AuthContext";
import { Helmet } from "react-helmet-async";

const AddFoods = () => {
	const navigate = useNavigate();
	const { user } = useContext(AuthContext);

	const handleAddFood = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const initialData = Object.fromEntries(formData.entries());

		fetch("https://food-share-server-jade.vercel.app/foods", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(initialData),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					Swal.fire({
						position: "top-end",
						icon: "success",
						title: "Added Food Successfully",
						showConfirmButton: false,
						timer: 1500,
					});
					navigate("/manageFoods");
				}
			});
	};

	return (
		<div className="mx-auto">
			<Helmet>
				<title>Add Food | FoodShare</title>
			</Helmet>
			<h2 className="text-4xl font-semibold text-center my-4 lg:mt-12">
				Add Foods
			</h2>
			<div className="w-10/12 mx-auto">
				<form onSubmit={handleAddFood} className="card-body">
					<div className="form-control">
						<label className="label">
							<span className="label-text">Food Name</span>
						</label>
						<input
							type="text"
							placeholder="name"
							name="name"
							className="input input-bordered border-[#94c341]"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Photo</span>
						</label>
						<input
							type="text"
							placeholder="photo url"
							name="photo"
							className="input input-bordered border-[#94c341]"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Food Quantity</span>
						</label>
						<input
							type="text"
							placeholder="quantity"
							name="quantity"
							className="input input-bordered border-[#94c341]"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Pickup Location</span>
						</label>
						<input
							type="text"
							placeholder="location"
							name="location"
							className="input input-bordered border-[#94c341]"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Food Status</span>
						</label>
						<input
							type="text"
							placeholder="status"
							name="status"
							className="input input-bordered border-[#94c341]"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Expiration Date</span>
						</label>
						<input
							type="date"
							name="expireDate"
							className="input input-bordered border-[#94c341]"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Donator Name</span>
						</label>
						<input
							type="text"
							placeholder="donator name"
							name="donator"
							className="input input-bordered border-[#94c341]"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Donator Image</span>
						</label>
						<input
							type="text"
							placeholder="image"
							name="image"
							className="input input-bordered border-[#94c341]"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Donator Email</span>
						</label>
						<input
							type="email"
							defaultValue={user?.email}
							placeholder="email"
							name="email"
							className="input input-bordered border-[#94c341]"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Additional notes</span>
						</label>
						<textarea
							className="textarea textarea-bordered border-[#94c341]"
							placeholder="notes"
							name="notes"
						></textarea>
					</div>
					<div className="form-control mt-6">
						<button className="btn text-white text-lg bg-[#94c341]">
							Add Food
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddFoods;
