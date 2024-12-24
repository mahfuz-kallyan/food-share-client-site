import { createBrowserRouter} from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Error from "../Pages/Error";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
	{
		path: "/",
        element: <MainLayouts></MainLayouts>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            }
        ]
	},
]);

export default router;