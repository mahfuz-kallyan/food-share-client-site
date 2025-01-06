import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";


const RequestFoods = () => {
    const {user} = useContext(AuthContext)
    const { data: requestedFood = [] } = useQuery({
		queryKey: ["requestedFood"],
		queryFn: async () => {
			const res = await axios.get(
				`http://localhost:5000/requested/${user.email}`
			);
			return res.data;
			console.log(requestedFood);
			
		},
	});
	return (
		<div className="mx-auto mt-8">
			<h2 className="text-4xl font-semibold text-center">
				Request Foods
			</h2>
			<div className="p-2 lg:p-12">
				<div className="overflow-x-auto">
					<table className="table">
						{/* head */}
						<thead>
							<tr>
								<th></th>
								<th>Name</th>
								<th>Food Name</th>
								<th>Pickup location</th>
								<th>Expire date</th>
								<th>Request date</th>
							</tr>
						</thead>
						<tbody>
							{requestedFood.map((food, index) => (
								<tr key={index}>
									<th>{index + 1}</th>
									<td className="text-lg font-semibold">
										{food.donator}
									</td>
									<td className="font-semibold">
										{food.name}
									</td>
									<td className="font-semibold">
										{food.location}
									</td>
									<td className="font-semibold">
										{food.expireDate}
									</td>
									<td className="font-bold text-[#94c341]">
										{food.requestDate}
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

export default RequestFoods;
