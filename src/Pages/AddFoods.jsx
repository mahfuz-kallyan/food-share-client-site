import React from 'react';

const AddFoods = () => {

    const handleAddFood = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        console.log(initialData);
        
        fetch('', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(initialData)
            
        })
            .then(res => res.json())
            .then(data => {
            console.log(data);
            
        })
    }

    return (
		<div className="mx-auto">
			<h2 className="text-3xl">Add Foods</h2>
			<div>
				<form onSubmit={handleAddFood} className="card-body">
					<div className="form-control">
						<label className="label">
							<span className="label-text">Food Name</span>
						</label>
						<input
							type="text"
							placeholder="name"
							name="name"
							className="input input-bordered"
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
							className="input input-bordered"
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
							className="input input-bordered"
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
							className="input input-bordered"
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
							className="input input-bordered"
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
							className="input input-bordered"
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
							className="input input-bordered"
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
							className="input input-bordered"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Donator Email</span>
						</label>
						<input
							type="email"
							placeholder="email"
							name="email"
							className="input input-bordered"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Additional notes</span>
						</label>
						<textarea
							className="textarea textarea-bordered"
							placeholder="notes"
							name="notes"
						></textarea>
					</div>
					<div className="form-control mt-6">
						<button className="btn btn-primary">Add Food</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddFoods;