import {
	Box,
	Button,
	Flex,
	FormControl,
	Input,
	InputGroup,
	InputLeftElement,
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
import { useNavigate } from "react-router-dom";

const ActionsAuc = ({ id, houseReq, toast }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const [startPrice, setStartPrice] = useState("");
	const [endPrice, setEndPrice] = useState("");
	const [incressPrice, setIncressPrice] = useState("");

	const navigate = useNavigate();

	const deletHouse = () => {
		// api call
		houseReq
			.delete(`/deleteHouse/${id}`)
			.then((res) => {
				toast({
					title: res.data,
					status: "success",
					duration: 9000,
					isClosable: true,
					position: "top-right",
				});
				navigate("/admin/auctions");
			})
			.catch((err) => {
				toast({
					title: "خطأ",
					status: "error",
					duration: 2000,
					isClosable: true,
					position: "top-right",
				});
			});
	};

	const updateHouse = () => {
		// api call
		houseReq
			.put(`/updateHouse/${id}`, {
				start_price: startPrice,
				end_price: endPrice,
				increase_value: incressPrice,
			})
			.then((res) => {
				toast({
					title: res.data,
					status: "success",
					duration: 9000,
					isClosable: true,
					position: "top-right",
				});
				setStartPrice("");
				setEndPrice("");
				onClose();
			})
			.catch((err) => {
				toast({
					title: "خطأ",
					status: "error",
					duration: 2000,
					isClosable: true,
					position: "top-right",
				});
			});
	};

	return (
		<>
			<Box
				w="full"
				display={"flex"}
				alignItems={"center"}
				justifyContent={"space-between"}
				borderTop={"1px solid #777"}
				pt="5"
			>
				<Button
					onClick={() => {
						deletHouse();
					}}
					colorScheme={"red"}
				>
					حذف المزاد
				</Button>
				<Button colorScheme={"telegram"} onClick={onOpen}>
					تعديل المزاد
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
						<ModalHeader textAlign={"center"}>تعديل اسعار المزاد</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<Flex>
								<Box w="full">
									<FormControl>
										<InputGroup mb="5">
											<InputLeftElement
												mr="5"
												pointerEvents="none"
												children={<i className="bx bx-play"></i>}
											/>
											<Input
												value={startPrice}
												onChange={(e) => {
													setStartPrice(e.target.value);
												}}
												type="number"
												placeholder="سعر بدء المزاد"
											/>
										</InputGroup>
										<InputGroup mb="5">
											<InputLeftElement
												pointerEvents="none"
												children={<i className="bx bxs-log-in-circle"></i>}
											/>
											<Input
												value={endPrice}
												onChange={(e) => {
													setEndPrice(e.target.value);
												}}
												type="number"
												placeholder="سعر انتهاء المزاد"
											/>
										</InputGroup>
										<InputGroup mb="5">
											<InputLeftElement
												pointerEvents="none"
												children={<i className="bx bxs-log-in-circle"></i>}
											/>
											<Input
												value={incressPrice}
												onChange={(e) => {
													setIncressPrice(e.target.value);
												}}
												type="number"
												placeholder="سعر الرفعه الواحده للمزاد"
											/>
										</InputGroup>
									</FormControl>
								</Box>
							</Flex>
							<Button
								onClick={() => {
									updateHouse();
								}}
								w="100%"
								mt={5}
								colorScheme={"teal"}
							>
								تعديل الاسعار
							</Button>
						</ModalBody>
						<ModalFooter></ModalFooter>
					</ModalContent>
				</Modal>
			</Box>
		</>
	);
};

export default ActionsAuc;
