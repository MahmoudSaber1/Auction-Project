import { Box, Text } from "@chakra-ui/react";
import React from "react";
import CountUp from "react-countup";
import { AuctionState } from "../../../AuctionContext";

const UserDetails = () => {
	const { calcUsers } = AuctionState();

	return (
		<>
			<Box
				_hover={{ boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" }}
				backgroundColor={`${"var(--main-color)"}`}
				rounded="md"
				w="full"
				className="flexR"
				flexDirection={"column"}
				transition="0.3s"
				py="5"
				flex={0.5}
			>
				<Box
					width={"70px"}
					height="70px"
					className="flexR"
					rounded={"full"}
					border="1px solid #03C9D7"
				>
					<i className="bx bxs-user text-3xl"></i>
				</Box>
				<Text
					py="5"
					fontSize={["md", "lg", "xl"]}
					fontWeight="700"
					letterSpacing={"1px"}
				>
					المستخدمين
				</Text>
				<Text
					color={`${"var(--text-color)"}`}
					fontSize={["md", "lg", "xl"]}
					fontWeight="700"
					letterSpacing={"1px"}
				>
					{calcUsers === "" ? (
						<CountUp end={0} duration={2.75} />
					) : (
						<CountUp end={calcUsers} duration={2.75} />
					)}
				</Text>
			</Box>
		</>
	);
};

export default UserDetails;
