import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const DesktopLinks = ({ NavbarLinks }) => {
	return (
		<>
			<Box
				gap={5}
				className={"flexR"}
				display={["none", "none", "none", "flex"]}
				h="100%"
			>
				{NavbarLinks.map((link, index) => (
					<Link key={index} to={link.path} className="links">
						<Text
							transition={"0.3s"}
							fontSize={["md", "md", "lg"]}
							fontWeight="bold"
						>
							{link.name}
						</Text>
					</Link>
				))}
			</Box>
		</>
	);
};

export default DesktopLinks;
