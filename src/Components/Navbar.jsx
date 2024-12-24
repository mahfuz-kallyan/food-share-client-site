import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	const links = (
		<div className="lg:flex justify-center items-center gap-2">
			<li className="text-white font-medium">
				<NavLink to={"/"}>Home</NavLink>
			</li>
			<li className="text-white font-medium">
				<NavLink to={"/available"}>Available Foods</NavLink>
			</li>
		</div>
	);

	return (
		<div>
			<div className="navbar bg-[#94c341] p-8">
				<div className="navbar-start">
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 text-white"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-[#94c341] rounded-box z-[1] mt-3 w-52 p-2 shadow"
						>
							{links}
						</ul>
					</div>
					<a className="text-white text-3xl font-semibold">
						Organic<span className="text-gray-700">Food</span>
					</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">{links}</ul>
				</div>
				<div className="navbar-end gap-2">
					<Link to={"/login"} className="btn text-[#94c341]">Login</Link>
					<Link to={"/register"} className="btn text-[#94c341]">Register</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
