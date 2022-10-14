import React from "react";
import { Footer, Navbar } from "./";

const Containers = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default Containers;
