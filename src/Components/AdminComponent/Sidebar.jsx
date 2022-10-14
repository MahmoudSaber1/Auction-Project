import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Box, Image, Text } from "@chakra-ui/react";
import { icons } from "../../Assets";
import { AuctionState } from "../../AuctionContext";

export const links = [
	{
		title: "Dashboard",
		links: [
			{
				name: "الرئيسيه",
				to: "/admin/dashboard",
				icon: <i className="bx bxs-dashboard"></i>,
			},
		],
	},

	{
		title: "Pages",
		links: [
			{
				name: "المزادات",
				to: "/admin/auctions",
				icon: <i className="bx bx-building-house"></i>,
			},
			{
				name: "المستخدمين",
				to: "/admin/users",
				icon: <i className="bx bxs-user"></i>,
			},
		],
	},
];

const Sidebar = () => {
	const { activeMenu, setActiveMenu, screenSize } = AuctionState();

	const handleCloseSideBar = () => {
		if (activeMenu !== undefined && screenSize <= 900) {
			setActiveMenu(false);
		}
	};

	const activeLink =
		"flex items-center gap-5 pl-4 pt-3 pb-2.5 pr-2 rounded-lg  text-white  text-md m-2";
	const normalLink =
		"flex items-center gap-5 pl-4 pt-3 pb-2.5 pr-2.5 rounded-lg text-md text-white hover:bg-gray-500 m-2";

	return (
		<div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
			{activeMenu && (
				<>
					<div className="flex justify-between pb-3 pt-3 items-center">
						<Link to="/">
							<Box className="flexR" gap={2}>
								<Image src={icons.logo} alt="logo" />
								<Text fontSize={["xl", "2xl"]} fontWeight="bold">
									المزادات{" "}
									<Box as="span" color={`${"var(--text-color)"}`}>
										المنزلية
									</Box>
								</Text>
							</Box>
						</Link>
						<button
							type="button"
							onClick={() => setActiveMenu(!activeMenu)}
							style={{ color: "#03C9D7" }}
							className="text-xl rounded-md p-3 hover:bg-gray-500 mt-4 block md:hidden"
						>
							<i className="bx bxs-x-circle"></i>
						</button>
					</div>
					<div className="mt-10 ">
						{links.map((item) => (
							<div key={item.title}>
								<p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
								{item.links.map((link) => (
									<NavLink
										to={link.to}
										key={link.name}
										onClick={handleCloseSideBar}
										style={({ isActive }) => ({
											backgroundColor: isActive ? "#03C9D7" : "",
										})}
										className={({ isActive }) =>
											isActive ? activeLink : normalLink
										}
									>
										{link.icon}
										<span className="capitalize ">{link.name}</span>
									</NavLink>
								))}
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default Sidebar;
