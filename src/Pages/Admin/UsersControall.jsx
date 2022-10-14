import { Box, Container, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import {
	AdminContainer,
	CustomersTable,
	HeaderUser,
} from "../../Components/AdminComponent";

const UsersControall = () => {
	return (
		<>
			<AdminContainer>
				<VStack alignItems={"center"} justifyContent="center">
					<Container maxW={["6xl"]}>
						<Flex
							maxW="100%"
							alignItems={"center"}
							justifyContent={"center"}
							className="section-padding"
						>
							<Box
								backgroundColor={`${"var(--main-color)"}`}
								rounded="md"
								maxW="100%"
								py="10"
								px="5"
							>
								{/* User Header */}
								<HeaderUser />
								{/* Customers Table */}
								<CustomersTable />
							</Box>
						</Flex>
					</Container>
				</VStack>
			</AdminContainer>
		</>
	);
};

export default UsersControall;
