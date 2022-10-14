import { Container, VStack } from "@chakra-ui/react";
import React from "react";
import { Containers, HeroSection, ServiceCurd } from "../Components";

const Home = () => {
	return (
		<>
			<Containers>
				<VStack>
					<HeroSection />
					<Container maxW={["3xl", "6xl"]}>
						<ServiceCurd />
					</Container>
				</VStack>
			</Containers>
		</>
	);
};

export default Home;
