import image1 from "../../assets/images/front-view-delicious-soup-served-with-lemon-green-white-bowl-wooden-tray-vegetables-foods-oil-bottle-spices-black-table.jpg";
import image2 from "../../assets/images/thai-food-tom-yum-kung-river-prawn-spicy-soup.jpg";
import image3 from "../../assets/images/bowl-dal-with-side-curry-sauce.jpg";

const Banner = () => {
	return (
		<div className="mx-auto relative">
			<div className="carousel w-full">
				<div id="slide1" className="carousel-item relative w-full">
					<img src={image1} className="w-full object-cover" />
					<div className="absolute top-3/4 left-8 gap-4 lg:left-5 lg:right-5 flex -translate-y-1/2 transform lg:justify-between">
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
				<div id="slide2" className="carousel-item relative w-full">
					<img src={image2} className="w-full object-cover" />
					<div className="absolute top-3/4 left-8 gap-4 lg:left-5 lg:right-5 flex -translate-y-1/2 transform lg:justify-between">
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
				<div id="slide3" className="carousel-item relative w-full">
					<img src={image3} className="w-full object-cover" />
					<div className="absolute top-3/4 left-8 gap-4 lg:left-5 lg:right-5 flex -translate-y-1/2 transform lg:justify-between">
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
			<div className=" w-11/12 md:w-2/3 flex flex-col justify-center items-center mx-auto space-y-6 absolute bottom-32 left-4 lg:left-52">
				<h2 className="text-5xl font-semibold text-center text-gray-200">
					Live <span className="text-[#94c341]">healthy</span> with a
					glass of <span className="text-[#94c341]">fruit juice</span>{" "}
					everyday.
				</h2>
				<p className="text-sm font-medium text-[#94c341]">
					Quebec brand who's mission is to promote outdoor living
				</p>
				<button className="btn bg-[#94c341] border-none">
					View More
				</button>
			</div>
		</div>
	);
};

export default Banner;
