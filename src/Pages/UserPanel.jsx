/* eslint-disable no-unused-vars */
import {
	Alert,
	AlertIcon,
	Box,
	Button,
	Container,
	Flex,
	Image,
	Text,
	VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Containers } from "../Components";

import { AuctionState } from "../AuctionContext";
import HouseReq from "../Common/helpers/HouseReq";

import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const UserPanel = () => {
	const { userState, userName, userId } = AuctionState();
	const { termsReference } = HouseReq();
	const [terms, setTerms] = useState();
	const [hide, setHide] = useState(false);

	const getTermsReference = () => {
		// api call
		termsReference.get(`/termsReference/${userId}`).then((res) => {
			setTerms(res);
			setHide(true);
		});
	};

	// Download as PDF
	const downloadFileDocument = () => {
		window.print();
	};

	return (
		<>
			<Containers>
				<VStack
					className="section-padding"
					alignItems={"center"}
					justifyContent="center"
				>
					<Container maxW={["3xl", "6xl"]}>
						<Box
							display={"flex"}
							alignItems={"center"}
							justifyContent="center"
							flexDirection={"column"}
							boxShadow={"lg"}
							width={["100%"]}
							p="5"
							backgroundColor={`${"var(--main-color)"}`}
							mb="5"
							rounded={"md"}
						>
							{userState === 1 ? (
								hide === false ? (
									<Button
										colorScheme={"green"}
										onClick={() => {
											getTermsReference();
										}}
									>
										عرض كراسة الشروط
									</Button>
								) : (
									<Button
										colorScheme={"green"}
										onClick={() => {
											downloadFileDocument("dataFile");
										}}
									>
										تحميل كراسة الشروط
									</Button>
								)
							) : (
								<Alert status="info" color={"black"}>
									<AlertIcon />
									مرحبا {userName} <br />
									برجاء العلم انك لن تستطيع تنزيل او تحميل كراسة الشروط الا بعد
									التحقق من معلومات الدفع الخاصه بكم
								</Alert>
							)}
							<Box id="dataFile" backgroundColor={"#34495e"} h="full">
								<div
									dangerouslySetInnerHTML={{
										__html: terms === undefined ? null : terms.data,
									}}
								/>
							</Box>
						</Box>
					</Container>
				</VStack>
			</Containers>
		</>
	);
};

export default UserPanel;
