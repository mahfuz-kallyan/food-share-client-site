import image1 from '../../assets/images/new1.jpg'
import image2 from '../../assets/images/new2.jpg'
import image3 from '../../assets/images/new3.jpg'

const NewFoods = () => {
    return (
		<div className="my-12 space-y-8 lg:p-14 relative mx-auto ">
			<h2 className="text-4xl font-semibold text-center">Latest News</h2>
			<div className="flex gap-8 flex-col lg:flex-row justify-center items-center">
				<div className="w-1/2 relative">
					<img className="rounded-2xl" src={image2} alt="" />
					<div className="absolute left-4 bottom-8   lg:bottom-8 lg:left-14">
						<h3 className="text-2xl font-medium text-[#94c341]">
							Latest News
						</h3>
						<p className="text-sm ">Latest and upcoming news</p>
					</div>
				</div>
				<div className="w-1/2 space-y-4">
					<div className="card card-side bg-gray-300 shadow-xl">
						<figure>
							<img
								className="w-60  px-4"
								src={image1}
								alt="Movie"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title">
								New news is released!
							</h2>
							<p>Click the button to watch the news.</p>
							<div className="card-actions justify-end">
								<button className="btn bg-[#94c341] border-none text-gray-800">
									Watch
								</button>
							</div>
						</div>
					</div>
					<div className="card card-side bg-gray-300 shadow-xl">
						<figure>
							<img
								className="w-60 h-60 p-4 rounded-lg "
								src={image3}
								alt="Movie"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title">
								New news is released!
							</h2>
							<p>Click the button to watch the news.</p>
							<div className="card-actions justify-end">
								<button className="btn bg-[#94c341] border-none text-gray-800">
									Watch
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewFoods;