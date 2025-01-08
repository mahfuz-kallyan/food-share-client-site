import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Error from "../Pages/Error";
import Home from "../Pages/Home/Home";
import AvailableFoods from "../Pages/AvailableFoods";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddFoods from "../Pages/AddFoods";
import Details from "../Components/Details";
import PrivateRoute from "./PrivateRoute";
import RequestFoods from "../Pages/RequestFoods";
import ManageFoods from "../Pages/ManageFoods";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayouts></MainLayouts>,
		errorElement: <Error></Error>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/available",
				element: <AvailableFoods></AvailableFoods>,
				loader: () =>
					fetch("https://food-share-server-jade.vercel.app/foods"),
			},
			{
				path: "/details/:id",
				element: <Details></Details>,
				loader: async ({ params }) => {
					const res = await fetch(
						"https://food-share-server-jade.vercel.app/foods"
					);
					const data = await res.json();
					return data?.find((item) => item?._id === params.id);
				},
			},
			{
				path: "/addFood",
				element: (
					<PrivateRoute>
						<AddFoods></AddFoods>
					</PrivateRoute>
				),
			},
			{
				path: "/requestFood",
				element: (
					<PrivateRoute>
						<RequestFoods></RequestFoods>
					</PrivateRoute>
				),
			},
			{
				path: "/manageFoods",
				element: (
					<PrivateRoute>
						<ManageFoods></ManageFoods>
					</PrivateRoute>
				),
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
		],
	},
]);

export default router;
