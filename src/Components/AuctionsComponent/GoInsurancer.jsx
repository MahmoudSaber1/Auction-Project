import {
	Box,
	Button,
	FormControl,
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
	useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import HouseReq from "../../Common/helpers/HouseReq";
import Inputs from "../Inputs";

const GoInsurancer = ({ hId, uId }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	// User Pymante
	const [bankName, setBankName] = useState("");
	const [pymentNumber, setPymentNumber] = useState("");
	const [images, setImages] = useState([]);
	// Pyment Func
	const bankChan = (e) => {
		setBankName(e.target.value);
	};
	const pymentNChan = (e) => {
		setPymentNumber(e.target.value);
	};

	const [imaSrc, setImgSrc] = React.useState("");

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

	const { addAuctionInsurancer } = HouseReq();
	const toast = useToast();

	const addInsurancerAuction = () => {
		// api call
		addAuctionInsurancer
			.post("/addAuctionInsurancer", {
				house_id: hId,
				user_id: uId,
				auction_photo: images,
				bank_name: bankName,
				payment_number: pymentNumber,
			})
			.then((res) => {
				toast({
					title: "تم ارسال بيانات دفع التأمين بنجاح",
					description: "برجاء الانتظاز حتي يتم التأكد من بيانات الدفع",
					status: "success",
					duration: 9000,
					isClosable: true,
					position: "top-right",
				});
				setImgSrc("");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<Button colorScheme={"teal"} onClick={onOpen}>
				دخول المزاد
			</Button>

			<Modal size={"xl"} isCentered isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent backgroundColor={`${"var(--main-color)"}`}>
					<ModalHeader textAlign={"center"}>رسوم المزاد</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl mb="5">
							<Box
								className="flexR"
								flexDirection={["column", "row"]}
								gap="3"
								mb="5"
							>
								<Inputs
									placeH={"اسم البنك"}
									typeInput={"text"}
									leftIcon={<Box as="i" className="bx bxs-bank"></Box>}
									isTrue={false}
									val={bankName}
									change={bankChan}
								/>
								<Inputs
									placeH={"رقم ايصال الدفع"}
									typeInput={"number"}
									leftIcon={
										<Box as="i" className="bx bxs-credit-card-alt"></Box>
									}
									isTrue={false}
									val={pymentNumber}
									change={pymentNChan}
								/>
							</Box>
							<Box
								display={"flex"}
								alignItems="center"
								justifyContent="space-between"
								flexDirection={["column", "row"]}
							>
								<Box
									display={"flex"}
									alignItems="center"
									justifyContent="center"
									flex={1}
									order="1"
								>
									<Image
										rounded={"md"}
										width={"210px"}
										height="150px"
										src={
											imaSrc ? imaSrc : "https://dummyimage.com/250x150/000/fff"
										}
									/>
								</Box>
								<Button
									onClick={defaultBtnActive}
									w="50%"
									colorScheme={"twitter"}
									mt={2}
									mb={2}
								>
									صورة ايصال الدفع
									<Input
										onChange={onChange}
										id="defaultBtn"
										type="file"
										hidden
									/>
								</Button>
							</Box>
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button
							w="full"
							onClick={() => {
								addInsurancerAuction();
								onClose();
							}}
							colorScheme={"green"}
						>
							دفع التأمين
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default GoInsurancer;
