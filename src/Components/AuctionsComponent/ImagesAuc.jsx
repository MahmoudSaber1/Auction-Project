import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const ImagesAuc = ({ img, title, description }) => {
	return (
		<>
			<Box
				className="flexR"
				flexDirection={["column", "column", "row"]}
				gap={"8"}
				mt={"8"}
			>
				<Box lineHeight={"1.7"}>
					<Text
						fontSize={["md", "lg", "2xl"]}
						fontWeight="700"
						letterSpacing={"1px"}
						color={"#03C9D7"}
					>
						{title}
					</Text>
					<Text
						fontSize={["md", "lg", "xl"]}
						fontWeight="700"
						letterSpacing={"1px"}
					>
						{description}
					</Text>
				</Box>

				<Box
					className="flexR"
					boxShadow={"base"}
					width="350px"
					height={"265px"}
				>
					<Swiper
						pagination={{
							dynamicBullets: true,
						}}
						loop={true}
						modules={[Pagination]}
						className="mySwiper rounded-md"
					>
						{img.map((image, index) => (
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
			</Box>
		</>
	);
};

export default ImagesAuc;
