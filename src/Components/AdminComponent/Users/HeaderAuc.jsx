import { Box, Text } from "@chakra-ui/react";
import React from "react";

const HeaderAuc = () => {
	return (
		<>
			<Box
				w="full"
				display={"flex"}
				alignItems={"center"}
				justifyContent={"space-between"}
				pb="5"
				borderBottom={"1px solid #777"}
			>
				<Text
					fontSize={["md", "lg", "2xl"]}
					fontWeight="700"
					letterSpacing={"1px"}
					color={"#03C9D7"}
				>
					المستخدمين
				</Text>
			</Box>
		</>
	);
};

export default HeaderAuc;
