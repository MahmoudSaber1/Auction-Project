/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Container, Flex, Spinner, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AuctionState } from "../AuctionContext";
import AuthUser from "../Common/helpers/LogUser";
import HouseReq from "../Common/helpers/HouseReq";

import { ActionsAuc, Containers, DetailsAuc, ImagesAuc } from "../Components";

const UserAuctionsId = () => {
	const { userLogedIn } = AuthUser();
	const { houseReq, showPrices } = HouseReq();
	const { userHousesData, setUserHousesData, userId } = AuctionState();
	const [loading, setLoading] = useState(false);
	const [PriceData, setPriceData] = useState([]);

	const handelHome = () => {
		// api call
		houseReq
			.get("/showHouse")
			.then((res) => {
				setUserHousesData(res.data);
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
		}, 5000);

		return () => {
			clearInterval(setTIme);
		};
	}, []);

	const page = window.location.pathname;
	const current = parseInt(page.split("/").slice(-1)[0]);

	return (
		<>
			<Containers>
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
								{userLogedIn ? (
									loading === true ? (
										<>
											{userHousesData.length > 0 ? (
												userHousesData
													.filter((houses) => {
														return houses.id === current;
													})
													.map((house) => (
														<React.Fragment key={house.id}>
															{/* Images Auctions */}
															<ImagesAuc
																img={house.images}
																title={house.title}
																description={house.description}
															/>
															{/* Details Auctions */}
															<DetailsAuc
																details={house}
																data={PriceData}
																current={current}
															/>
															{/* Actions */}
															<ActionsAuc
																houseId={house.id}
																increase={house.increase_value}
																userID={userId}
															/>
														</React.Fragment>
													))
											) : (
												<Box height={`${"calc(77vh - 100px)"}`}>
													<Text
														fontSize={["md", "lg", "2xl"]}
														fontWeight="700"
														letterSpacing={"1px"}
														py="5"
														borderBottom={"1px solid #777"}
													>
														???? ?????? ?????????? ???? ???????? ??????
													</Text>
												</Box>
											)}
										</>
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
									)
								) : (
									<Box height={`${"calc(77vh - 100px)"}`}>
										<Text
											fontSize={["md", "lg", "2xl"]}
											fontWeight="700"
											letterSpacing={"1px"}
											py="5"
											borderBottom={"1px solid #777"}
										>
											?????????? ?????????? ???????????? ???????? ?????????? ???????????????? ??????????????
										</Text>
									</Box>
								)}
							</Box>
						</Flex>
					</Container>
				</VStack>
			</Containers>
		</>
	);
};

export default UserAuctionsId;
