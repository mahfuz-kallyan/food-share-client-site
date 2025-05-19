import React from "react";
import { toast } from "react-toastify";

const Subscribe = () => {
	return (
		<div>
			<div className="flex flex-col justify-center items-center space-y-3">
				<p className="text-sm text-[#94c341]">Need any update?</p>
				<h2 className="text-4xl font-semibold">Subscribe here</h2>
			</div>
			<div className="flex flex-col items-center my-8">
				<div
					style={{
						backgroundImage:
							"url(https://i.ibb.co.com/ySsGLpc/bg-shadow.png)",
					}}
					className="space-y-5 p-4 md:p-14 border-2 w-5/6 rounded-2xl backdrop-filter backdrop-blur-sm bg-[#94c341]"
				>
					<h2 className="text-2xl font-bold text-center">
						Subscribe to our Newsletter
					</h2>
					<p className="text-[#131313B3] text-center">
						Get the latest updates and news right in your inbox!
					</p>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							toast.info("Subscribed Successfully!");
							e.target.reset();
						}}
						className="flex justify-center items-center gap-5"
					>
						<input
							id="email"
							required
							type="email"
							placeholder="Enter your Email"
							className="input input-bordered w-full max-w-xs"
						/>
						<button
							type="submit"
							className="btn bg-gradient-to-r from-[#94c341] to-yellow-360"
						>
							Subscribe
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Subscribe;
