import { Outlet, Navigate } from "react-router-dom";
import LogUser from "./Common/helpers/LogUser";

const PrivetUser = () => {
	const { userLogedIn } = LogUser();

	return userLogedIn === true ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivetUser;
