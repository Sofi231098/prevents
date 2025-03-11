import { RouterProvider } from "react-router";
import { router } from "./router";

const RoutesProvider = () => <RouterProvider router={router} />;

export default RoutesProvider;