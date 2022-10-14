import React from "react";
import { Route, Routes } from "react-router-dom";
import {
	About,
	AdminAuctions,
	Auctions,
	Contact,
	Dashboard,
	Home,
	UsersControall,
	UserPanel,
	UserID,
	AuctionsId,
	UserAuctionsId,
	Terms,
} from "./Pages";
import { AdminLogin, Login, Signup } from "./Auth";
import NotFound from "./NotFound";
import PrivateRoutes from "./PrivateRoutes";
import PrivetUser from "./PrivetUser";

const App = () => {
	return (
		<>
			<Routes>
				{/* Home Routes */}
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/auctions" element={<Auctions />} />
					<Route path="/auctions/:id" element={<UserAuctionsId />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/terms" element={<Terms />} />
				</Route>
				{/* Admin Dashboard Routes */}
				<Route path="/admin" element={<AdminLogin />} />
				<Route element={<PrivateRoutes />}>
					<Route path="/admin/dashboard" element={<Dashboard />} />
					<Route path="/admin/auctions" element={<AdminAuctions />} />
					<Route path="/admin/auctions/:id" element={<AuctionsId />} />
					<Route path="/admin/users" element={<UsersControall />} />
					<Route path="/admin/users/:id" element={<UserID />} />
				</Route>

				{/* User Auth */}
				<Route path="/login" element={<Login />} />
				{/* User Dashboard Routes */}
				<Route element={<PrivetUser />}>
					<Route path="/user" element={<UserPanel />} />
				</Route>
				<Route path="/signup" element={<Signup />} />

				{/* Not Found Route */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
};

export default App;
