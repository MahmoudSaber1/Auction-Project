import { Outlet, Navigate } from "react-router-dom";
import AuthAdmin from "./Common/helpers/AuthAdmin";

const PrivateRoutes = () => {
	const { logedIn } = AuthAdmin();

	return logedIn ? <Outlet /> : <Navigate to="/admin" />;
};

export default PrivateRoutes;
