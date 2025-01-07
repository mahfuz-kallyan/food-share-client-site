import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext/AuthContext';
import { toast } from 'react-toastify';

const ManageFoods = () => {
    const {user} = useContext(AuthContext)

    const { data: myFoods = []} = useQuery({
        queryKey: ["manageFoods", user.email],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/manage-foods/${user.email}`);
            return res.data;
        }
        
    })

    const handleStatus = (e, id) => {
       console.log(e.target.value, id);
        const data = {
            status: e.target.value
        }
        fetch(`http://localhost:5000/manage-foods/${id}`, {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
                if (data.modifiedCount) {
                   toast.success('Updated Status Successfully')
               }
                
            })
        .catch(error => console.log(error)
        )
        
    }
    return (
		<div className="mx-auto my-8">
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
											onChange={(e) => handleStatus(e, food._id)}
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