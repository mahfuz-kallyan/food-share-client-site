import image1 from "../../assets/images/front-view-delicious-soup-served-with-lemon-green-white-bowl-wooden-tray-vegetables-foods-oil-bottle-spices-black-table.jpg";
import image2 from "../../assets/images/thai-food-tom-yum-kung-river-prawn-spicy-soup.jpg";
import image3 from "../../assets/images/bowl-dal-with-side-curry-sauce.jpg";
import { toast } from "react-toastify";

const Banner = () => {
	const handleMore = () => {
		toast.success("Please visit on available page");
	};

	const textOverlay = (
		<div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4 md:px-8 space-y-6 z-10">
			<h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white">
				Live <span className="text-[#94c341]">healthy</span> with a
				glass of <span className="text-[#94c341]">fruit juice</span>{" "}
				everyday.
			</h2>
			<p className="text-sm md:text-lg font-medium text-[#94c341]">
				Quebec brand whose mission is to promote outdoor living
			</p>
			<button
				onClick={handleMore}
				className="btn bg-[#94c341] hover:bg-[#7ba62e] text-black border-none"
			>
				View More
			</button>
		</div>
	);

	return (
		<div className="relative w-full">
			<div className="carousel w-full">
				{/* Slide 1 */}
				<div
					id="slide1"
					className="carousel-item relative w-full min-h-screen"
				>
					<img
						src={image1}
						className="w-full h-full object-cover absolute inset-0"
						alt="Slide 1"
					/>
					{textOverlay}
					<div className="absolute left-5 right-5 top-2/3 md:top-1/2 flex justify-between transform -translate-y-1/2 z-20">
						<a
							href="#slide3"
							className="btn btn-circle hover:bg-[#94c341] border-none"
						>
							❮
						</a>
						<a
							href="#slide2"
							className="btn btn-circle hover:bg-[#94c341] border-none"
						>
							❯
						</a>
					</div>
				</div>

				{/* Slide 2 */}
				<div
					id="slide2"
					className="carousel-item relative w-full min-h-screen"
				>
					<img
						src={image2}
						className="w-full h-full object-cover absolute inset-0"
						alt="Slide 2"
					/>
					{textOverlay}
					<div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2 z-20">
						<a
							href="#slide1"
							className="btn btn-circle hover:bg-[#94c341] border-none"
						>
							❮
						</a>
						<a
							href="#slide3"
							className="btn btn-circle hover:bg-[#94c341] border-none"
						>
							❯
						</a>
					</div>
				</div>

				{/* Slide 3 */}
				<div
					id="slide3"
					className="carousel-item relative w-full min-h-screen"
				>
					<img
						src={image3}
						className="w-full h-full object-cover absolute inset-0"
						alt="Slide 3"
					/>
					{textOverlay}
					<div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2 z-20">
						<a
							href="#slide2"
							className="btn btn-circle hover:bg-[#94c341] border-none"
						>
							❮
						</a>
						<a
							href="#slide1"
							className="btn btn-circle hover:bg-[#94c341] border-none"
						>
							❯
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
