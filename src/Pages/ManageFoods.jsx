import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useState } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ManageFoods = () => {
	const { user } = useContext(AuthContext);

	const { data: myFoods = [] } = useQuery({
		queryKey: ["manageFoods", user.email],
		queryFn: async () => {
			const res = await axios.get(
				`https://food-share-server-jade.vercel.app/manage-foods/${user.email}`
			);
			return res.data;
		},
	});

	const handleStatus = (e, id) => {
		const data = {
			status: e.target.value,
		};
		fetch(`https://food-share-server-jade.vercel.app/manage-foods/${id}`, {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount) {
					toast.success("Updated Status Successfully");
				}
			})
			.catch((error) => console.log(error));
	};

	const handleDelete = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(
					`https://food-share-server-jade.vercel.app/manage-foods/${id}`,
					{
						method: "DELETE",
					}
				)
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						if (data.deletedCount > 0) {
							Swal.fire({
								title: "Deleted!",
								text: "Your file has been deleted.",
								icon: "success",
							});
						}
					})
					.catch((error) => console.log(error));
			}
		});
	};
	return (
		<div className="mx-auto my-8">
			<Helmet>
				<title>Manage | FoodShare</title>
			</Helmet>
			<h2 className="text-4xl font-semibold text-center">Manage Foods</h2>
			<div className="p-2 lg:p-12 mt-4">
				<div className="overflow-x-auto">
					<table className="table">
						{/* head */}
						<thead>
							<tr>
								<th></th>
								<th>Food Name</th>
								<th>Notes</th>
								<th>Status</th>
								<th>Update Status</th>
							</tr>
						</thead>
						<tbody>
							{myFoods.map((food, index) => (
								<tr key={index}>
									<th>{index + 1}</th>
									<td>{food.name}</td>
									<td>{food.notes}</td>
									<td>{food.status}</td>
									<td>
										<select
											onChange={(e) =>
												handleStatus(e, food._id)
											}
											defaultValue={
												food.status || "Change Status"
											}
											className="select select-bordered select-xs w-full max-w-xs"
										>
											<option disabled>
												Change Status
											</option>
											<option>Available</option>
											<option>Not Available</option>
										</select>
									</td>
									<td>
										<button
											onClick={() =>
												handleDelete(food._id)
											}
											className="btn btn-neutral"
										>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default ManageFoods;
