import {
	Avatar,
	Box,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Tooltip,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { AuctionState } from "../../AuctionContext";
import AuthAdmin from "../../Common/helpers/AuthAdmin";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
	<Tooltip label={title} color="white" placement="bottom">
		<button
			type="button"
			onClick={() => customFunc()}
			style={{ color }}
			className="relative text-xl rounded-md p-3 hover:bg-gray-500"
		>
			<span
				style={{ background: dotColor }}
				className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
			/>
			{icon}
		</button>
	</Tooltip>
);

const Navbar = () => {
	const { user, logout } = AuthAdmin();
	const EXPIRE_TIME = 1000 * 60 * 60;

	const { activeMenu, setActiveMenu, setScreenSize, screenSize } =
		AuctionState();

	setTimeout(() => {
		logout();
	}, EXPIRE_TIME);

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, [setScreenSize]);

	useEffect(() => {
		if (screenSize <= 900) {
			setActiveMenu(false);
		} else {
			setActiveMenu(true);
		}
	}, [screenSize, setActiveMenu]);

	const handleActiveMenu = () => setActiveMenu(!activeMenu);

	return (
		<>
			<div className="flex w-full justify-between p-2 md:mr-6 md:ml-6 relative">
				<NavButton
					title="Menu"
					customFunc={handleActiveMenu}
					color={"#03C9D7"}
					icon={<Box as="i" className="bx bxs-dashboard"></Box>}
				/>
				<div className="flex">
					<Menu>
						<MenuButton className="hover:bg-gray-500 rounded-lg">
							<Box className="flex items-center gap-2 cursor-pointer hover:bg-gray-500 p-1 rounded-lg">
								<Box
									as="i"
									className="text-white-400 text-14 bx bx-chevron-down"
								></Box>
								<p>
									<span className="text-white-400 text-14">مرحبا,</span>{" "}
									<span className="text-white-400 capitalize font-bold ml-1 text-14">
										{user.name}
									</span>
								</p>
								<Avatar size={"sm"} name={user.name} />
							</Box>
						</MenuButton>
						<MenuList>
							<MenuItem onClick={logout} color="red.400">
								تسجيل الخروج
							</MenuItem>
						</MenuList>
					</Menu>
				</div>
			</div>
		</>
	);
};

export default Navbar;
