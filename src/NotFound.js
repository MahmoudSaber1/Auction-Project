import { Button, Heading, VStack, Link } from "@chakra-ui/react";
import React from "react";

const NotFound = () => {
	return (
		<>
			<VStack spacing={8} align="center" justify="center" h={"100vh"}>
				<Heading as="h1" size="xl" textAlign="center" color="gray.500">
					404 - Page Not Found
				</Heading>
				<Link href={"/"}>
					<Button colorScheme={"teal"}>
						<i className="bx bxs-home-smile"></i>
					</Button>
				</Link>
			</VStack>
		</>
	);
};

export default NotFound;
