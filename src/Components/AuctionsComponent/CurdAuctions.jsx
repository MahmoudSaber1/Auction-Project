import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";

import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const CurdAuctions = ({ data }) => {
	return (
		<>
			<Box
				mt="5"
				boxShadow={"0px 5px 15px rgba(0,0,0,0.2)"}
				className="flexR"
				flexDirection={["column", "column", "row"]}
			>
				<Box
					boxShadow="0px 5px 15px rgba(0,0,0,0.3)"
					className="flexR"
					flexDirection={"column"}
					rounded="lg"
					width="250px"
					height={"165px"}
				>
					<Swiper
						pagination={{
							dynamicBullets: true,
						}}
						loop={true}
						modules={[Pagination]}
						className="mySwiper rounded-md"
					>
						{data.images.map((image, index) => (
							<SwiperSlide key={index}>
								<Image
									src={`https://mhouses.net/APIS/${image.image}`}
									width={"full"}
									objectFit="cover"
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</Box>
				<Box p="5">
					<Text
						fontSize={["md", "lg", "xl"]}
						fontWeight="700"
						letterSpacing={"1px"}
						color={"#03C9D7"}
					>
						{data.title}
					</Text>
					<Text
						fontSize={["md", "lg", "lg"]}
						fontWeight="400"
						letterSpacing={"1px"}
					>
						{data.description}
					</Text>
					<Text
						fontSize={["sm"]}
						color={"#03C9D7"}
						mb="2"
						fontWeight="400"
						letterSpacing={"1px"}
					>
						<Box as="i" ml="1" className="bx bx-map"></Box>
						{data.location}
					</Text>
					<Link to={`/auctions/${data.id}`}>
						<Button size="sm" colorScheme={"teal"}>
							صفحة المزاد{" "}
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

export default CurdAuctions;
