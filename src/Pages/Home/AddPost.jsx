

const AddPost = () => {
    return (
		<div className="bg-gray-800 flex flex-col md:flex-row justify-center items-center gap-8 my-14">
			<div className="p-6 lg:p-12 lg:w-6/12 space-y-3">
				<h3 className="text-white text-3xl font-medium">
					Foodshare is what you need, to get traffic for your awesome
					recipe website!
				</h3>
				<h5 className="text-white">
					Don't have traffic Yet? Join Now! And Start with Foodshare!
					It's free
				</h5>
			</div>
			<div className="p-6">
				<button className="btn text-gray-800 bg-[#94c341] border-none ">
					Add Foods
				</button>
			</div>
		</div>
	);
};

export default AddPost;