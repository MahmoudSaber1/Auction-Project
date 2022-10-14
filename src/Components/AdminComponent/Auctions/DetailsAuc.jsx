/* eslint-disable array-callback-return */
import { Box, Text } from "@chakra-ui/react";
import React from "react";

const DetailsAuc = ({ details, data, current }) => {
	const CalcAllPrice = () => {
		let totalPrice = parseInt(details.start_price);

		data.forEach(function (item) {
			if (item.house.id === current) {
				totalPrice += parseInt(item.price);
			}
		});

		return totalPrice;
	};

	return (
		<>
			<Box
				w="full"
				display={"flex"}
				alignItems={"center"}
				justifyContent={"space-around"}
				flexDirection={["column", "column", "row"]}
				gap={["5", "5", "0"]}
				mt="5"
			>
				<Box>
					<Text
						fontSize={["md", "lg", "2xl"]}
						fontWeight="700"
						letterSpacing={"1px"}
						color={"#03C9D7"}
					>
						انتهاء المزاد في
					</Text>
					<Box
						mt="3"
						border={"1px solid #ddd"}
						height="30px"
						borderRadius={"5px"}
						p="5"
						className="flexR"
					>
						<Text>{details.time}</Text>
					</Box>
				</Box>
				<Box>
					<Text
						fontSize={["md", "lg", "xl"]}
						fontWeight="500"
						letterSpacing={"1px"}
						mb="5"
					>
						المزاد يبدأ بسعر : {details.start_price} جنيه
					</Text>
					<Text
						fontSize={["md", "lg", "xl"]}
						fontWeight="500"
						letterSpacing={"1px"}
					>
						السعر الحالي للمزاد :{" "}
						<Box as="span" fontWeight="bold" color={`${"var(--text-color)"}`}>
							{CalcAllPrice()} جنيه{" "}
							<Box as="i" className="bx bx-up-arrow-alt"></Box>
						</Box>
					</Text>
				</Box>
			</Box>
			<Box
				mt="5"
				mb="8"
				w={"full"}
				border={"1px solid #ddd"}
				height="150px"
				borderRadius={"5px"}
				overflow="auto"
				p="5"
			>
				{data.map((price) => {
					if (price.house.id === current) {
						return (
							<Box key={price.id} display={"flex"} gap="2">
								<Text>تم اضافة </Text>
								<Text
									fontSize={["md"]}
									fontWeight="700"
									letterSpacing={"1px"}
									color={"#03C9D7"}
								>
									{price.price} جنيه
								</Text>
								<Text>بواسطة</Text>
								<Text
									fontSize={["md"]}
									fontWeight="700"
									letterSpacing={"1px"}
									color={"#03C9D7"}
								>
									{price.user.name}
								</Text>
							</Box>
						);
					}
				})}
			</Box>
		</>
	);
};

export default DetailsAuc;
