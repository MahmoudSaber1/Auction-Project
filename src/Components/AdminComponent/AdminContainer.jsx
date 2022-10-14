import { Box } from "@chakra-ui/react";
import React from "react";
import { AuctionState } from "../../AuctionContext";
import { Sidebar, Navbar, Footer } from "./";

const AdminContainer = ({ children }) => {
	const { activeMenu, screenSize } = AuctionState();

	return (
		<Box display={"flex"}>
			<Box
				backgroundColor={`${"var(--main-color)"}`}
				flex={activeMenu ? 0.5 : null}
				display={activeMenu ? "flex" : "none"}
				position={screenSize < 899 ? "fixed" : ""}
				zIndex={screenSize < 899 ? "99" : ""}
				w={screenSize > 899 ? "20%" : ""}
			>
				<Sidebar />
			</Box>
			<Box flex={activeMenu ? 1.5 : "2"} w={screenSize > 899 ? "80%" : "100%"}>
				<Box
					display={"flex"}
					h="64px"
					alignItems={"center"}
					justifyContent="center"
					backgroundColor={`${"var(--main-color)"}`}
				>
					<Navbar />
				</Box>
				<Box>{children}</Box>
				<Box>
					<Footer />
				</Box>
			</Box>
		</Box>
	);
};

export default AdminContainer;
