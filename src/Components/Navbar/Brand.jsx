import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../../Assets";

const Brand = () => {
	return (
		<>
			<Link to="/">
				<Box className="flexR" gap={2}>
					<Image src={icons.logo} alt="logo" />
					<Text
						display={["none", "none", "block", "block"]}
						fontSize={["xl", "2xl", "3xl"]}
						fontWeight="bold"
					>
						المزادات{" "}
						<Box as="span" color={`${"var(--text-color)"}`}>
							المنزلية
						</Box>
					</Text>
				</Box>
			</Link>
		</>
	);
};

export default Brand;
