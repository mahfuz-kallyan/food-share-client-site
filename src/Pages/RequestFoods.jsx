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
		},
	});
	return (
		<div>
            <h2 className="text-4xl font-semibold">Request Foods</h2>
            {
                requestedFood.map(r => <h2 >{ r.name}</h2>)
            }
		</div>
	);
};

export default RequestFoods;
