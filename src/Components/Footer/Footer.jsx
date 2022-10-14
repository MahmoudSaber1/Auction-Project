import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
	return (
		<>
			{/* Footer Layout */}
			<Box as="footer" backgroundColor={`${"var(--main-color)"}`} py={"10px"}>
				<Container maxW={["xl", "3xl", "6xl"]}>
					<Text
						fontSize={["xl", "2xl"]}
						fontWeight="bold"
						color="white"
						textAlign="center"
					>
						جميع الحقوق محفوظة &copy; {new Date().getFullYear()} المزادات
						المنزلية.
					</Text>
				</Container>
			</Box>
		</>
	);
};

export default Footer;
