import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext/AuthContext';

const ManageFoods = () => {
    const {user} = useContext(AuthContext)

    const { data: myFoods = []} = useQuery({
        queryKey: ["manageFoods", user.email],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/manage-foods/${user.email}`);
            return res.data;
        }
        
    })
    return (
		<div className="mx-auto my-8">
			<h2 className="text-4xl font-semibold text-center">
				Manage Foods
			</h2>
			<div className="p-2 lg:p-12 mt-4">
				<div className="overflow-x-auto">
					<table className="table">
						{/* head */}
						<thead>
							<tr>
								<th></th>
								<th>Food Name</th>
								<th>Notes</th>
								<th>Quantity</th>
							</tr>
						</thead>
						<tbody>
							{myFoods.map((food, index) => (
								<tr key={index}>
									<th>{index + 1}</th>
									<td>{food.name}</td>
									<td>{food.notes}</td>
									<td>{food.quantity}</td>
									<td>
										<button className="btn text-[#94c341] border-[#94c341]">
											Update
										</button>
									</td>
									<td>
										<button className="btn btn-neutral">
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