import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { images } from "../../Assets";

const HeroSection = () => {
	return (
		<>
			<Box
				height={`${"calc(100vh - 64px)"}`}
				width={"full"}
				className="flexR"
				flexDirection={"column"}
				backgroundImage={images.house2}
				backgroundPosition="center"
				backgroundSize={"cover"}
				backgroundRepeat="no-repeat"
				position={"relative"}
			>
				<Box className="overlay"></Box>
				<Heading
					as="h1"
					fontSize={["2xl", "3xl", "4xl", "5xl", "6xl"]}
					fontWeight="500"
					lineHeight={"1.7"}
					letterSpacing="1px"
					zIndex={"2"}
					textAlign="center"
				>
					مرحبا بكم في موقع المزادات المنزليه
					<br /> ابحث عن افضل{" "}
					<Box as="span" color={`${"var(--text-color)"}`}>
						العقارات الذكية
					</Box>
				</Heading>
			</Box>
		</>
	);
};

export default HeroSection;
