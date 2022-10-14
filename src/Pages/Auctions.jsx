/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Container, Flex, Spinner, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AuctionState } from "../AuctionContext";
import AuthUser from "../Common/helpers/LogUser";
import HouseReq from "../Common/helpers/HouseReq";

import { Containers, CurdAuctions } from "../Components";

const Auctions = () => {
	const { userLogedIn } = AuthUser();
	const { houseReq } = HouseReq();
	const { userHousesData, setUserHousesData } = AuctionState();
	const [loading, setLoading] = useState(false);

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

	useEffect(() => {
		const setTIme = setInterval(() => {
			setLoading(true);
			handelHome();
		}, 2500);

		return () => {
			clearInterval(setTIme);
		};
	}, []);

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
												<Box
													className="flexR"
													flexDirection={["column", "column", "column"]}
													gap="5"
												>
													{userHousesData.map((house) => (
														<React.Fragment key={house.id}>
															<CurdAuctions data={house} />
														</React.Fragment>
													))}
												</Box>
											) : (
												<Box height={`${"calc(77vh - 100px)"}`}>
													<Text
														fontSize={["md", "lg", "2xl"]}
														fontWeight="700"
														letterSpacing={"1px"}
														py="5"
														borderBottom={"1px solid #777"}
													>
														لم يتم اضافة اي مزاد بعد
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
											برجاء تسجيل الدخول اولا لرؤية المزادات الحاليه
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

export default Auctions;
