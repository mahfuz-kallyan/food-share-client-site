import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";



const MainLayouts = () => {
    return (
		<div className="max-w-[1920px] mx-auto">
			<div>
				<Navbar></Navbar>
			</div>
			<div>
				<Outlet></Outlet>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default MainLayouts;