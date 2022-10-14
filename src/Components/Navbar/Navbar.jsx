/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Flex, VStack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import DesktopLinks from "./DesktopLinks";
import Brand from "./Brand";
import AuthUser from "./AuthUser";
import LogUser from "../../Common/helpers/LogUser";
import { AuctionState } from "../../AuctionContext";

const NavbarLinks = [
	{ name: "الرئيسية", path: "/" },
	{ name: "كراسة الشروط", path: "/terms" },
	{ name: "معلومات هامه", path: "/about" },
	{ name: "المزادات", path: "/auctions" },
	{ name: "تواصل معنا", path: "/contact" },
];

const Navbar = () => {
	const { setUserState, setUserName, setUserId } = AuctionState();
	const { userLogedIn, user, logout } = LogUser();
	const [isAuth, setIsAuth] = useState(false);

	const EXPIRE_TIME = 1000 * 60 * 60;

	setTimeout(() => {
		logout();
	}, EXPIRE_TIME);

	useEffect(() => {
		const intervel = setInterval(() => {
			if (userLogedIn === true) {
				setIsAuth(true);
				setUserState(user.status);
				setUserName(user.name);
				setUserId(user.id);
			} else {
				setIsAuth(false);
			}
		}, 1000);
		return () => {
			clearInterval(intervel);
		};
	}, [userLogedIn]);

	return (
		<>
			<VStack
				h="64px"
				alignItems={"center"}
				justifyContent="center"
				backgroundColor={`${"var(--main-color)"}`}
			>
				<Container maxW={["3xl", "6xl"]}>
					<Flex w="full" alignItems={"center"} justifyContent={"space-between"}>
						{/* Moblile Menu */}
						<MobileMenu NavbarLinks={NavbarLinks} />
						{/* Icon And Brand */}
						<Brand />
						{/* Desktop Links */}
						<DesktopLinks NavbarLinks={NavbarLinks} />
						{/* User */}
						<AuthUser isAuth={isAuth} user={user} logout={logout} />
					</Flex>
				</Container>
			</VStack>
		</>
	);
};

export default Navbar;
