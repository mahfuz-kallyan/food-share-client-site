import Lottie from "lottie-react";
import deliverLottie from '../../assets/Lottie/Animation - 1747036207150.json'

const Delivery = () => {
    return (
		<div className="flex flex-col-reverse lg:flex-row justify-center items-center p-6 lg:p-14 gap-2 lg:gap-8">
			<div className="w-[500px]">
				<Lottie animationData={deliverLottie}></Lottie>
			</div>
			<div className="space-y-2">
				<h4 className="text-2xl font-semibold text-[#94c341]">At your service</h4>
				<h2 className="text-4xl font-semibold text-orange-600">
					Free Delivery
				</h2>
				<h2 className="text-xl font-semibold">Free Anywhere</h2>
			</div>
		</div>
	);
};

export default Delivery;