import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
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
	Text,
	Textarea,
	useDisclosure,
	useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HouseReq from "../../../Common/helpers/HouseReq.js";

const HeaderAuc = ({ HousesData }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { houseReq } = HouseReq();

	const toast = useToast();
	const navigate = useNavigate();

	// House Requset To Add
	const [title, setTitle] = useState("");
	const [date, setDate] = useState();
	const [startPrice, setStartPrice] = useState();
	const [endPrice, setEndPrice] = useState();
	const [incressPrice, setIncressPrice] = useState();
	const [loc, setLoc] = useState("");
	const [disc, setDisc] = useState("");
	const [state, setState] = useState("داخل المزاد(لم يتم بيعها)");

	// Home Handel
	const handelHome = () => {
		// api call
		houseReq
			.post("/addHouse", {
				title: title,
				start_price: startPrice,
				end_price: endPrice,
				increase_value: incressPrice,
				description: disc,
				status: state,
				location: loc,
				time: date,
			})
			.then(() => {
				toast({
					title: "تم اضافة المزاد بنجاح",
					status: "success",
					duration: 9000,
					isClosable: true,
					position: "top-right",
				});
				onClose();
				navigate("/admin/auctions");
			})
			.catch((err) => {
				console.log(err);
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
				pb="5"
				borderBottom={"1px solid #777"}
			>
				<Text
					fontSize={["md", "lg", "2xl"]}
					fontWeight="700"
					letterSpacing={"1px"}
					color={"#03C9D7"}
				>
					المزادات
				</Text>
				{HousesData.length < 2 ? (
					<Button colorScheme={"green"} onClick={onOpen}>
						+ اضافة مزاد
					</Button>
				) : null}
				<Modal
					size={"xl"}
					scrollBehavior={"inside"}
					isCentered
					isOpen={isOpen}
					onClose={onClose}
				>
					<ModalOverlay />
					<ModalContent backgroundColor={`${"var(--main-color)"}`}>
						<ModalHeader textAlign={"center"}>اضافة مزاد جديد</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<Flex>
								<Box w="full">
									<FormControl>
										<InputGroup mb="5">
											<InputLeftElement
												pointerEvents="none"
												children={<i className="bx bx-area"></i>}
											/>
											<Input
												type="text"
												placeholder="مساحة الشقه : شقة 70 متر"
												value={title}
												onChange={(e) => {
													setTitle(e.target.value);
												}}
											/>
										</InputGroup>
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
										<InputGroup mb="5">
											<InputLeftElement
												mr="5"
												pointerEvents="none"
												children={<i className="bx bx-detail"></i>}
											/>
											<Textarea
												resize={"none"}
												height="50px"
												placeholder="تفاصيل عن الشقة"
												value={disc}
												onChange={(e) => {
													setDisc(e.target.value);
												}}
											/>
										</InputGroup>
										<InputGroup mb="5">
											<InputLeftElement
												pointerEvents="none"
												children={<i className="bx bx-store"></i>}
											/>
											<Input
												type="text"
												placeholder="حالة الشقه : داخل المزاد او تم بيعها"
												value={state}
												onChange={(e) => {
													setState(e.target.value);
												}}
											/>
										</InputGroup>
										<InputGroup mb="5">
											<InputLeftElement
												pointerEvents="none"
												children={<i className="bx bx-target-lock"></i>}
											/>
											<Input
												value={loc}
												onChange={(e) => {
													setLoc(e.target.value);
												}}
												type="text"
												placeholder="عنوان الشقه"
											/>
										</InputGroup>
										<FormLabel>تاريخ انتهاء المزاد</FormLabel>
										<InputGroup mb="5">
											<Input
												placeholder="Select Date and Time"
												size="md"
												type="date"
												onChange={(e) => {
													setDate(e.target.value);
												}}
											/>
										</InputGroup>
									</FormControl>
								</Box>
							</Flex>
							<Button
								onClick={() => handelHome()}
								w="100%"
								mt={5}
								colorScheme={"teal"}
							>
								اضافة المزاد
							</Button>
						</ModalBody>
						<ModalFooter></ModalFooter>
					</ModalContent>
				</Modal>
			</Box>
		</>
	);
};

export default HeaderAuc;
