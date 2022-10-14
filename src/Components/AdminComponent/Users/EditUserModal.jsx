import {
	Box,
	Button,
	Flex,
	FormControl,
	Image,
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
import React from "react";

const EditUserModal = ({ rows }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	// Get Image And Preview
	const [imaSrc, setImgSrc] = React.useState("");

	function defaultBtnActive() {
		const defaultBtn = document.getElementById("defaultBtn");
		defaultBtn.click();
	}

	function onChange(e) {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.onload = (event) => {
			setImgSrc(event.target.result);
		};
		reader.readAsDataURL(file);
	}

	return (
		<>
			<Box
				onClick={onOpen}
				className="w-4 mr-2 cursor-pointer transform hover:text-green-400 hover:scale-110"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
					/>
				</svg>
			</Box>

			<Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent backgroundColor={`${"var(--main-color)"}`}>
					<ModalHeader textAlign={"center"}>تحديث معلومات المستخدم</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Flex
							justify={"space-between"}
							gap="5"
							flexDirection={["column", "column", "row", "row"]}
						>
							<Box
								display={"flex"}
								alignItems="center"
								justifyContent="center"
								flexDirection={"column"}
							>
								<Box width={"150px"} height="150px">
									<Image
										rounded={"md"}
										w="100%"
										h="100%"
										src={imaSrc ? imaSrc : rows.avatar}
									/>
								</Box>
								<Button
									onClick={defaultBtnActive}
									w="100%"
									colorScheme={"green"}
									mt={2}
								>
									صورة جديده
									<Input
										onChange={onChange}
										id="defaultBtn"
										type="file"
										hidden
									/>
								</Button>
							</Box>
							<Box>
								<FormControl>
									<InputGroup mb="2">
										<InputLeftElement
											pointerEvents="none"
											children={<i className="bx bx-user-pin"></i>}
										/>
										<Input
											value={rows.name}
											type="text"
											placeholder="اسم المستخدم"
										/>
									</InputGroup>
									<InputGroup mb="2">
										<InputLeftElement
											mr="5"
											pointerEvents="none"
											children={<i className="bx bxs-envelope"></i>}
										/>
										<Input
											value={rows.email}
											type="email"
											placeholder="البريد الالكتروني"
										/>
									</InputGroup>
									<InputGroup mb="2">
										<InputLeftElement
											pointerEvents="none"
											children={<i className="bx bxs-id-card"></i>}
										/>
										<Input
											value={rows.naID}
											type="number"
											placeholder="الرقم القومي"
										/>
									</InputGroup>
									<InputGroup mb="2">
										<InputLeftElement
											mr="5"
											pointerEvents="none"
											children={<i className="bx bxs-edit-location"></i>}
										/>
										<Input
											value={rows.address}
											type="text"
											placeholder="العنوان"
										/>
									</InputGroup>
									<InputGroup mb="2">
										<InputLeftElement
											pointerEvents="none"
											children={<i className="bx bxs-calendar"></i>}
										/>
										<Input
											value={rows.birDate}
											type="text"
											placeholder="تاريخ الميلاد"
										/>
									</InputGroup>
									<InputGroup mb="2">
										<InputLeftElement
											pointerEvents="none"
											children={<i className="bx bxs-phone"></i>}
										/>
										<Input
											value={rows.uniQNum}
											type="text"
											placeholder="الرقم الخاص"
										/>
									</InputGroup>
								</FormControl>
							</Box>
						</Flex>
						<Button w="100%" mt={5} colorScheme={"teal"}>
							حفظ
						</Button>
					</ModalBody>
					<ModalFooter></ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default EditUserModal;
