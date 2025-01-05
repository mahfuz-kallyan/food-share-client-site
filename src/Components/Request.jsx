import React, { useContext, useState } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

const RequestModal = ({ food, closeModal }) => {
     const { user } = useContext(AuthContext);
	const { name, photo, _id, email, donator, location, expireDate } = food;
	const [notes, setNotes] = useState("");
	const [requestDate] = useState(new Date().toLocaleString());

    const  handleSubmit = async() => {

		const requestData = {
			userEmail: user.email,
			notes,
			requestDate,
        };
        
        axios.put(`http://localhost:5000/foods/${_id}`, requestData)
            .then(res => {
                if (res.data.insertedId) {
                toast.success('Request sent');
                }
                
            })
            .catch(err => {
            toast.error('Something went wrong')
        })

		console.log("Request Submitted:", requestData);
		closeModal();
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
			<div className="bg-white p-6 rounded-lg w-[500px]">
				<h2 className="text-3xl font-bold mb-4">Request Food</h2>
				<div className="space-y-4">
					<p>
						<strong>Food Name:</strong> {name}
					</p>
					<p>
						<strong>Donator:</strong> {donator}
					</p>
					<p>
						<strong>Email:</strong> {email}
					</p>
					<p>
						<strong>Pickup Location:</strong> {location}
					</p>
					<p>
						<strong>Expire Date:</strong> {expireDate}
					</p>
					<p>
						<strong>Request Date:</strong> {requestDate}
					</p>
					<textarea
						className="w-full p-2 border"
						placeholder="Additional Notes"
						value={notes}
						onChange={(e) => setNotes(e.target.value)}
					></textarea>
				</div>
				<div className="flex justify-end mt-4">
					<button
						onClick={closeModal}
						className="btn bg-gray-400 mr-2"
					>
						Cancel
					</button>
					<button onClick={handleSubmit} className="btn bg-[#94c341]">
						Request
					</button>
				</div>
			</div>
		</div>
	);
};

export default RequestModal;
