import {
	Box,
	Button,
	Image,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import HouseReq from "../../../Common/helpers/HouseReq";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const ImagesAuc = ({ img, id }) => {
	const [images, setImages] = useState();
	const { houseReq } = HouseReq();
	const [imaSrc, setImgSrc] = React.useState("");
	const { isOpen, onOpen, onClose } = useDisclosure();
	function defaultBtnActive() {
		const defaultBtn = document.getElementById("defaultBtn");
		defaultBtn.click();
	}
	function onChange(e) {
		const file = e.target.files[0];
		setImages(file);
		const reader = new FileReader();
		reader.onload = (event) => {
			setImgSrc(event.target.result);
		};
		reader.readAsDataURL(file);
	}

	const handelHome = () => {
		// api call
		houseReq
			.post("/addHouseImage", {
				house_id: id,
				image: images,
			})
			.then(() => {
				setImgSrc("");
			});
	};

	return (
		<>
			<Box className="flexR" mt={"8"}>
				<Box
					boxShadow="0px 5px 15px rgba(0,0,0,0.3)"
					className="flexR"
					flexDirection={"column"}
					rounded="lg"
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

					<Box my="3">
						<Button onClick={onOpen} colorScheme="green">
							{" "}
							<Box fontSize={["lg", "2xl"]} className="bx bxs-image-add"></Box>
						</Button>
						<Modal
							size={"xl"}
							scrollBehavior={"inside"}
							isCentered
							isOpen={isOpen}
							onClose={onClose}
						>
							<ModalOverlay />
							<ModalContent backgroundColor={`${"var(--main-color)"}`}>
								<ModalHeader textAlign={"center"}>اضافة صوره</ModalHeader>
								<ModalCloseButton />
								<ModalBody>
									<Box
										display={"flex"}
										alignItems="center"
										justifyContent="space-between"
										flexDirection={"column"}
									>
										<Box
											display={"flex"}
											alignItems="center"
											justifyContent="center"
											flex={1}
										>
											<Image
												rounded={"md"}
												width={"210px"}
												height="150px"
												src={
													imaSrc
														? imaSrc
														: "https://dummyimage.com/250x150/000/fff"
												}
											/>
										</Box>
										{imaSrc ? null : (
											<Button
												onClick={defaultBtnActive}
												colorScheme={"green"}
												mt={2}
											>
												رفع صوره
												<Input
													onChange={onChange}
													id="defaultBtn"
													type="file"
													hidden
												/>
											</Button>
										)}
									</Box>
								</ModalBody>

								<ModalFooter
									display={"flex"}
									alignItems="center"
									justifyContent={"center"}
								>
									<Button
										onClick={() => {
											handelHome();
											setImgSrc("");
											onClose();
										}}
										w="full"
										variant="solid"
										colorScheme={"teal"}
									>
										+ اضافه
									</Button>
								</ModalFooter>
							</ModalContent>
						</Modal>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default ImagesAuc;
