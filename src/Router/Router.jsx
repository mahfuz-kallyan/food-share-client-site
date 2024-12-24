import { createBrowserRouter} from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Error from "../Pages/Error";
import Home from "../Pages/Home/Home";
import AvailableFoods from "../Pages/AvailableFoods";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

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
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ]
	},
]);

export default router;