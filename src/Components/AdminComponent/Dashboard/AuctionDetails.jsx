import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

import { AuctionState } from "../../../AuctionContext";

const AuctionDetails = () => {
	const { HousesData, totalPrice } = AuctionState();

	return (
		<>
			<Box flex="1" w="full" className="flexR">
				<Box
					_hover={{ boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" }}
					backgroundColor={`${"var(--main-color)"}`}
					rounded="md"
					w="full"
					className="flexR"
					flexDirection={"column"}
					transition="0.3s"
					py="5"
					px="5"
				>
					<Text
						fontSize={["md", "lg", "xl"]}
						fontWeight="700"
						letterSpacing={"1px"}
					>
						{HousesData.length === 0
							? "لم يتم اضافة مزاد بعد"
							: HousesData[0].title}
					</Text>
					<Box
						w="full"
						mt="8"
						mb="3"
						display="flex"
						alignItems={"center"}
						justifyContent={"space-between"}
						flexDirection={["column", "column", "row"]}
					>
						<Text
							fontSize={["md", "lg", "xl"]}
							fontWeight="500"
							letterSpacing={"1px"}
						>
							سعر بدء المزاد :{" "}
							<Box as="span">
								{HousesData.length === 0 ? "0" : HousesData[0].start_price}
							</Box>
						</Text>
						<Text
							fontSize={["md", "lg", "xl"]}
							fontWeight="500"
							letterSpacing={"1px"}
						>
							سعر انهاء المزاد :{" "}
							<Box as="span">
								{HousesData.length === 0 ? "0" : HousesData[0].end_price}
							</Box>
						</Text>
					</Box>
					<Text
						fontSize={["md", "lg", "xl"]}
						fontWeight="500"
						letterSpacing={"1px"}
						mb="8"
					>
						السعر الحالي للمزاد :{" "}
						<Box as="span" fontWeight="bold" color={`${"var(--text-color)"}`}>
							{totalPrice === 0 ? 0 : totalPrice}{" "}
							<Box as="i" className="bx bx-up-arrow-alt"></Box>
						</Box>
					</Text>
					<Link to="/admin/auctions">
						<Button colorScheme={"teal"}>
							الذهاب الي صفحة المزاد{" "}
							<Box
								as="i"
								mr="2"
								fontSize={"xl"}
								className="bx bx-left-arrow-alt"
							></Box>
						</Button>
					</Link>
				</Box>
			</Box>
		</>
	);
};

export default AuctionDetails;
