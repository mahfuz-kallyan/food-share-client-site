import { createBrowserRouter} from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Error from "../Pages/Error";
import Home from "../Pages/Home/Home";
import AvailableFoods from "../Pages/AvailableFoods";

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
        ]
	},
]);

export default router;