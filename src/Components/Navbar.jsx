import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../Context/AuthContext/AuthContext";

const Navbar = () => {
	const { user, signOutUser } = useContext(AuthContext);

	const handleSignOut = () => {
		signOutUser()
			.then(() => {
			console.log('successful signout ');
			})
			.catch(err => {
			console.log(err.message)
			
		})
	}

	const links = (
		<div className="lg:flex justify-center items-center gap-2">
			<li className="text-white font-medium">
				<NavLink to={"/"}>Home</NavLink>
			</li>
			<li className="text-white font-medium">
				<NavLink to={"/available"}>Available Foods</NavLink>
			</li>
			<li className="text-white font-medium">
				<NavLink to={"/addFood"}>Add Foods</NavLink>
			</li>
			<li className="text-white font-medium">
				<NavLink to={"/requestFood"}>My Request</NavLink>
			</li>
			<li className="text-white font-medium">
				<NavLink to={"/manageFoods"}>Manage Foods</NavLink>
			</li>
		</div>
	);

	return (
		<div className= " bg-[#94c341] lg:px-4 py-2 sticky top-0 z-50">
			<div className="navbar">
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
						Food<span className="text-gray-700">Share</span>
					</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">{links}</ul>
				</div>
				<div className="navbar-end gap-2">
					<div>
						<input
							type="checkbox"
							value="dark"
							className="toggle theme-controller"
						/>
					</div>
					{user && (
						<div className="mb-2">
							<img
								className="w-12 h-12 rounded-full relative translate-y-1"
								src={user?.photoURL}
								alt="User Photo"
							/>
							<div className="absolute left-0 bottom-[-30px] hidden group-hover:block bg-gray-700 text-white text-sm rounded px-2 py-1">
								{user?.displayName}
							</div>
						</div>
					)}
					{user ? (
						<button
							onClick={handleSignOut}
							className="btn text-[#94c341]"
						>
							Logout
						</button>
					) : (
						<div className="flex gap-2">
							<Link to={"/login"} className="btn text-[#94c341]">
								Login
							</Link>
							<Link
								to={"/register"}
								className="btn text-[#94c341]"
							>
								Register
							</Link>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
