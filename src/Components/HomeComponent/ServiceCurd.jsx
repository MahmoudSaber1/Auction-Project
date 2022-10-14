/* eslint-disable no-unused-vars */
import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { images } from "../../Assets";
import Heading from "../Heading";

// const services = [
// 	{
// 		icon: "bx bxs-store",
// 		title: "مزادات المنازل",
// 		desciptions: "يتم عمل مزادات علنه علي منازل خاصه يمكنك الاشتراك فيها",
// 	},
// 	{
// 		icon: "bx bxs-store",
// 		title: "بيع المنازل",
// 		desciptions: "يتم بيع المنازل بأسعار جيده يمكنك شرائها",
// 	},
// ];

const ServiceCurd = () => {
	return (
		<>
			<Box className="section-padding">
				<Heading title={"فديو توضيحي"} />
				<Box
					display={"grid"}
					gridTemplateColumns={"repeat(auto-fit, minmax(350px, 1fr))"}
					gridGap={"2rem"}
				>
					<video width="100%" controls>
						<source
							src="https://mhouses.net/APIS/public/auction.mp4"
							type="video/mp4"
						/>
						<source
							src="https://mhouses.net/APIS/public/auction.mp4"
							type="video/ogg"
						/>
						Your browser does not support HTML video.
					</video>

					{/* {services.map((service, index) => (
						<Box
							key={index}
							boxShadow={"base"}
							padding="50px 5px"
							display={"flex"}
							alignItems="center"
							justifyContent="center"
							flexDirection="column"
							flex={1}
							transition="all 0.3s ease-in-out"
							_hover={{ boxShadow: "lg" }}
							backgroundColor={`${"var(--main-color)"}`}
							borderRadius="md"
						>
							<Box
								border={`2px solid ${"var(--text-color)"}`}
								borderRadius="10px"
								width={"100px"}
								height={"100px"}
								display="flex"
								alignItems="center"
								justifyContent="center"
								fontSize={"2rem"}
							>
								<Box className={service.icon}></Box>
							</Box>
							<Text
								letterSpacing={"1px"}
								fontSize={"1.3rem"}
								fontWeight={"400"}
								marginTop="25px"
							>
								{service.title}
							</Text>
							<Text
								fontSize={"0.8rem"}
								fontWeight={"400"}
								marginTop="15px"
								marginBottom="15px"
								color="whiteAlpha.800"
								lineHeight="1.7"
								textAlign={"center"}
							>
								{service.desciptions}
							</Text>
							<Button colorScheme={"teal"} mb="5">
								المزيد
							</Button>
						</Box>
					))} */}
				</Box>
			</Box>
		</>
	);
};

export default ServiceCurd;
