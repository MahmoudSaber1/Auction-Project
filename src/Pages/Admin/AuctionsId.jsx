/* eslint-disable react-hooks/exhaustive-deps */
import {
	Box,
	Container,
	Flex,
	Spinner,
	useToast,
	VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import HouseReq from "../../Common/helpers/HouseReq";
import {
	ActionsAuc,
	AdminContainer,
	DetailsAuc,
	HeaderAuc,
	ImagesAuc,
} from "../../Components/AdminComponent";

import { AuctionState } from "../../AuctionContext";

const AuctionsId = () => {
	const { houseReq, houseUpdate, showPrices } = HouseReq();
	const { HousesData, setHousesData } = AuctionState();
	const [loading, setLoading] = useState(false);
	const toast = useToast();
	const [PriceData, setPriceData] = useState([]);

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

	const showAllPrice = () => {
		// api call
		showPrices
			.get("/showAuctions")
			.then((res) => {
				setPriceData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		const setTIme = setInterval(() => {
			setLoading(true);
			handelHome();
			showAllPrice();
		}, 3000);

		return () => {
			clearInterval(setTIme);
		};
	}, []);

	const page = window.location.pathname;
	const current = parseInt(page.split("/").slice(-1)[0]);

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
									{HousesData.filter((houses) => {
										return houses.id === current;
									}).map((house) => (
										<React.Fragment key={house.id}>
											{/* Images Auctions */}
											<ImagesAuc img={house.images} id={house.id} />
											{/* Details Auctions */}
											<DetailsAuc
												details={house}
												current={current}
												data={PriceData}
											/>
											{/* Actions */}
											<ActionsAuc
												id={house.id}
												houseReq={houseUpdate}
												toast={toast}
											/>
										</React.Fragment>
									))}
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

export default AuctionsId;
