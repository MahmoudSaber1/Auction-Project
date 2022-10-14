import { Container, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import {
	AdminContainer,
	AuctionInsurancer,
	UserDetails,
} from "../../Components/AdminComponent";

const Dashboard = () => {
	return (
		<>
			<AdminContainer>
				<VStack alignItems={"center"} justifyContent="center">
					<Container maxW={["6xl"]}>
						<Flex
							w="full"
							alignItems={"center"}
							justifyContent={"space-between"}
							className="section-padding"
							gap="10"
							flexDirection={["column", "column", "column"]}
						>
							{/* User Details */}
							<UserDetails />
							{/* AuctionInsurancer */}
							<AuctionInsurancer />
						</Flex>
					</Container>
				</VStack>
			</AdminContainer>
		</>
	);
};

export default Dashboard;
