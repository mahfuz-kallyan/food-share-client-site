import Lottie from "lottie-react";
import registerLottie from "../../assets/Lottie/Animation - 1734354078331.json";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";

const Register = () => {
	const [error, setError] = useState({});
	const { createUser, signInWithGoogle } = useContext(AuthContext);
	const navigate = useNavigate()

	const from = location?.state || "/";

	const handleRegister = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const photo = form.photo.value;
		const password = form.password.value;
		// password validation
		const validatePassword = (password) => {
			const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
			return regex.test(password);
		};

		if (!validatePassword(password)) {
			setError({
				...error,
				password:
					"Password must have an uppercase letter, a lowercase letter, and be at least 6 characters long",
			});
			toast.error(error.password);
			return;
		} else {
			setError((prev) => ({ ...prev, password: "" }));
		}

		createUser(email, password)
			.then((result) => {
				console.log(result.user);
				navigate(from)
			})
			.catch((err) => {
				console.log(err.message);
			});

	};

	const handleGoogle = () => {
		signInWithGoogle()
			.then((result) => {
				console.log(result.user);
				navigate(from);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return (
		<div className="hero bg-base-200 min-h-screen py-4">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left w-[500px]">
					<Lottie animationData={registerLottie}></Lottie>
				</div>
				<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					<form onSubmit={handleRegister} className="card-body">
						<h2 className="text-4xl font-semibold text-center mb-8">
							Register Now!
						</h2>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="text"
								name="name"
								placeholder="name"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Photo url</span>
							</label>
							<input
								type="text"
								name="photo"
								placeholder="url"
								className="input input-bordered"
								required
							/>
						</div>
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
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-primary">
								Register
							</button>
						</div>
					</form>
					<p className="p-4">
						Have you an account? Please{" "}
						<NavLink to="/login">
							<strong className="text-blue-700 underline">
								Login
							</strong>
						</NavLink>
					</p>
					<p className="p-4">
						<button onClick={handleGoogle} className="btn btn-ghost">
							Sign in with Google
						</button>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Register;
