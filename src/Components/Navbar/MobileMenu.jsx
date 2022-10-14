import { Box, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({ NavbarLinks }) => {
	return (
		<>
			<Box
				display={["flex", "flex", "flex", "none"]}
				className="flexR"
				h="100%"
				zIndex={99}
			>
				<Menu>
					<MenuButton>
						<Box as="i" className="bx bx-menu" fontSize={"30px"}></Box>
					</MenuButton>
					<MenuList color="black">
						{NavbarLinks.map((link, index) => (
							<Link key={index} to={link.path}>
								<MenuItem>{link.name}</MenuItem>
							</Link>
						))}
					</MenuList>
				</Menu>
			</Box>
		</>
	);
};

export default MobileMenu;
