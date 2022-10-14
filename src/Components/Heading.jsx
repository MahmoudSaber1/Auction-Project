import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Heading = ({ title }) => {
	return (
		<>
			<Box className="flexR" mb="10">
				<Text
					fontSize={["md", "lg", "3xl"]}
					letterSpacing="2px"
					className="heading"
					position={"relative"}
				>
					{title}
				</Text>
			</Box>
		</>
	);
};

export default Heading;
