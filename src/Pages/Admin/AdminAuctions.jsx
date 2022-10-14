/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Container, Flex, Spinner, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import HouseReq from "../../Common/helpers/HouseReq";
import {
	AdminContainer,
	CurdAuctions,
	HeaderAuc,
} from "../../Components/AdminComponent";

import { AuctionState } from "../../AuctionContext";

const AdminAuctions = () => {
	const { houseReq } = HouseReq();
	const { HousesData, setHousesData } = AuctionState();
	const [loading, setLoading] = useState(false);

	const handelHome = () => {
		// api call
		houseReq
			.get("/showHouse")
			.then((res) => {
				setHousesData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		const setTIme = setInterval(() => {
			setLoading(true);
			handelHome();
		}, 3000);

		return () => {
			clearInterval(setTIme);
		};
	}, []);

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
							flexDirection={["column", "column", "row"]}
						>
							{loading === true ? (
								<Box
									_hover={{ boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" }}
									backgroundColor={`${"var(--main-color)"}`}
									rounded="md"
									w="full"
									className="flexR"
									flexDirection={"column"}
									transition="0.3s"
									py="10"
									px="5"
								>
									{/* Header Auctions */}
									<HeaderAuc HousesData={HousesData} />
									<Box
										className="flexR"
										flexDirection={["column", "column", "row"]}
										gap="5"
									>
										{HousesData.map((house) => (
											<React.Fragment key={house.id}>
												<CurdAuctions data={house} />
											</React.Fragment>
										))}
									</Box>
								</Box>
							) : (
								<Box
									display={"flex"}
									alignItems="center"
									justifyContent={"center"}
									w="full"
								>
									<Spinner
										thickness="4px"
										speed="0.65s"
										emptyColor="gray.200"
										color="teal.500"
										size="lg"
									/>
								</Box>
							)}
						</Flex>
					</Container>
				</VStack>
			</AdminContainer>
		</>
	);
};

export default AdminAuctions;
