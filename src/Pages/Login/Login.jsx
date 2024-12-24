import Lottie from "lottie-react";
import loginLottie from '../../assets/Lottie/Animation - 1734342812159.json'
import { NavLink } from "react-router-dom";

const Login = () => {
    return (
		<div className="hero bg-base-200 min-h-screen">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left w-96">
					<Lottie animationData={loginLottie}></Lottie>
				</div>
				<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					<form className="card-body">
						<h2 className="text-4xl font-semibold text-center mb-8">
							Login Now!
						</h2>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								name="email"
								placeholder="email"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								name="password"
								placeholder="password"
								className="input input-bordered"
								required
							/>
							<label className="label">
								<a
									href="#"
									className="label-text-alt link link-hover"
								>
									Forgot password?
								</a>
							</label>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-primary">Login</button>
						</div>
					</form>
					<p className="p-4">
						Don't have an account? Please{" "}
						<NavLink to="/register">
							<strong className="text-blue-700 underline">
								Register
							</strong>
						</NavLink>
					</p>
					<p className="p-4">
						<button className="btn btn-ghost">
							Sign in with Google
						</button>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;