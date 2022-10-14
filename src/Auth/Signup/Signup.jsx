import React, { useState } from "react";
import {
	VStack,
	Box,
	Button,
	FormControl,
	Heading,
	Text,
	Alert,
	AlertIcon,
	Input,
	Image,
	Container,
	useToast,
	InputLeftElement,
} from "@chakra-ui/react";
import { Containers, Inputs } from "../../Components";
import { Link, useNavigate } from "react-router-dom";
import RegUser from "../../Common/helpers/RegUser";
import {} from "../../Components";

const Signup = () => {
	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);

	// Data User
	const [name, setName] = useState("");
	const [nId, setNId] = useState("");
	const [loc, setLoc] = useState("");
	const [date, setDate] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState();

	// User Func
	const nameChan = (e) => {
		setName(e.target.value);
	};
	const nIDChan = (e) => {
		setNId(e.target.value);
	};
	const locChan = (e) => {
		setLoc(e.target.value);
	};
	const dateChan = (e) => {
		setDate(e.target.value);
	};
	const emailChan = (e) => {
		setEmail(e.target.value);
	};
	const passChan = (e) => {
		setPassword(e.target.value);
	};
	const phoneChan = (e) => {
		setPhone(e.target.value);
	};

	// User Pymante
	const [bankName, setBankName] = useState("");
	const [pymentNumber, setPymentNumber] = useState("");
	const [depositorName, setDepositorName] = useState("");
	const [paymentDate, setPaymentDate] = useState("");
	const [images, setImages] = useState("");

	// Pyment Func
	const bankChan = (e) => {
		setBankName(e.target.value);
	};
	const pymentNChan = (e) => {
		setPymentNumber(e.target.value);
	};
	const depoChan = (e) => {
		setDepositorName(e.target.value);
	};
	const pymentDChan = (e) => {
		setPaymentDate(e.target.value);
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

	const { addUser } = RegUser();
	const toast = useToast();
	const navigate = useNavigate();

	const handelUser = () => {
		// api call
		addUser
			.post("/register", {
				payment_photo: images,
				name: name,
				national_id: nId,
				title: loc,
				date: date,
				email: email,
				password: password,
				phone: phone,
				bank_name: bankName,
				payment_number: pymentNumber,
				depositor_name: depositorName,
				payment_date: paymentDate,
			})
			.then((res) => {
				toast({
					title: res.data.status,
					description: res.data.message,
					status: "success",
					duration: 9000,
					isClosable: true,
					position: "top-right",
				});
				navigate("/login");
				setBankName("");
				setDate("");
				setDepositorName("");
				setEmail("");
				setImages("");
				setImgSrc("");
				setLoc("");
				setNId("");
				setName("");
				setPassword("");
				setPaymentDate("");
				setPhone("");
				setPymentNumber("");
			})
			.catch((err) => {
				console.log(err);
				toast({
					title: err.response.status,
					description: err.response.data.message,
					status: "error",
					duration: 9000,
					isClosable: true,
					position: "top-right",
				});
			});
	};

	return (
		<>
			<Containers>
				<VStack
					backgroundColor={`${"var(--secondary-color)"}`}
					align="center"
					justify="center"
					height="auto"
					py="8"
				>
					<Container maxW={"4xl"}>
						<Box
							boxShadow={"lg"}
							width={["100%"]}
							p="5"
							backgroundColor={`${"var(--main-color)"}`}
							height="auto"
							mb="5"
							rounded={"md"}
						>
							<Alert
								status="error"
								color={"black"}
								fontSize={["16px", "18px", "20px"]}
							>
								<AlertIcon />
								برجاء العلم بأنه لن يسمح لك بتسجيل الدخول او بتنزيل كراسة الشروط
								الا بعد ان يتم التحقق من معلومات الدفع <br />
								يتم ارسال المبلغ علي الحساب البنكي <br /> المبلغ المطلوب لكراسة
								الشروط : 145 جنيه
								<br /> الدفع عن طريق 1- البنك الاهلي المصري على رقم حساب
								4413071128420401017 باسم ابراهيم السيد زين العابدين (حساب شركة)
								<br /> 2- بنك القاهرة على رقم حساب 400/501/53875 باسم ابراهيم
								السيد زين العابدين(حساب شركة)
								<br /> بعد دفع المبلغ المطلوب يتم تصوير ايصال الدفع والرقم
								الحساب البنكي واسم البنك
							</Alert>
							<Alert
								mt="2"
								status="warning"
								color={"black"}
								fontSize={["16px", "18px", "20px"]}
							>
								<AlertIcon />
								يرجي الاحتفاظ بالوصل الخاص بكراسة الشروط ووصل الرسوم لحين استلام
								الشقة
							</Alert>
						</Box>
						<Box
							boxShadow={"lg"}
							width={["100%"]}
							p="5"
							backgroundColor={`${"var(--main-color)"}`}
							height="auto"
							rounded={"md"}
						>
							{/* Title */}
							<Heading
								fontSize={["xl", "4xl"]}
								fontWeight="bold"
								textAlign={"center"}
								mb="12"
							>
								حساب{" "}
								<Box
									as="span"
									color={`${"var(--text-color)"}`}
									textTransform="lowercase"
								>
									جديد
								</Box>
							</Heading>
							{/* User Information */}
							<FormControl isRequired mb="7">
								<Box
									className="flexR"
									flexDirection={["column", "row"]}
									gap="3"
									mb="5"
								>
									<Inputs
										placeH={"الاسم رباعي"}
										typeInput={"text"}
										leftIcon={<Box as="i" className="bx bx-edit"></Box>}
										isTrue={false}
										val={name}
										change={nameChan}
									/>
									<Inputs
										placeH={"الرقم القومي"}
										typeInput={"number"}
										leftIcon={<Box as="i" className="bx bxs-id-card"></Box>}
										isTrue={false}
										val={nId}
										change={nIDChan}
									/>
								</Box>
								<Box
									className="flexR"
									flexDirection={["column", "row"]}
									gap="3"
									mb="5"
								>
									<Inputs
										placeH={"العنوان: الخاص/المراسلة"}
										typeInput={"text"}
										leftIcon={
											<Box as="i" className="bx bx-location-plus"></Box>
										}
										isTrue={false}
										val={loc}
										change={locChan}
										labelName={"العنوان: الخاص/المراسلة"}
									/>
									<Inputs
										placeH={"تاريخ الميلاد"}
										typeInput={"date"}
										isTrue={false}
										val={date}
										change={dateChan}
										labelName={"تاريخ الميلاد"}
									/>
								</Box>

								<Box
									className="flexR"
									flexDirection={["column", "row"]}
									gap="3"
									mb="5"
								>
									<Inputs
										placeH={"البريد الالكتروني"}
										typeInput={"email"}
										leftIcon={<Box as="i" className="bx bx-envelope"></Box>}
										isTrue={false}
										val={email}
										change={emailChan}
									/>
									<Inputs
										placeH={"كلمة السر"}
										typeInput={show ? "text" : "password"}
										isTrue={true}
										val={password}
										change={passChan}
										right={
											<InputLeftElement width="4.5rem">
												<Button
													colorScheme={"telegram"}
													h="1.75rem"
													size="sm"
													onClick={handleClick}
												>
													{show ? (
														<Box as="i" className="bx bx-show"></Box>
													) : (
														<Box as="i" className="bx bx-hide"></Box>
													)}
												</Button>
											</InputLeftElement>
										}
									/>
								</Box>
								<Inputs
									placeH={"رقم الهاتف / الواتساب"}
									typeInput={"number"}
									leftIcon={<Box as="i" className="bx bx-phone"></Box>}
									isTrue={false}
									val={phone}
									change={phoneChan}
								/>
							</FormControl>
							{/* Just Text */}
							<Box mb="7" className="relative pb-2">
								<Box className="absolute top-0 left-0 w-full border-b"></Box>
								<Box className="absolute -top-3 left-0 w-full text-center">
									<Box
										as="span"
										className="px-3 text-md"
										backgroundColor={`${"var(--main-color)"}`}
									>
										معلومات الدفع المطلوبه
									</Box>
								</Box>
							</Box>
							{/* Bank Info */}
							<FormControl isRequired mb="5">
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
									className="flexR"
									flexDirection={["column", "row"]}
									gap="3"
									mb="5"
								>
									<Inputs
										placeH={"اسم المودع"}
										typeInput={"text"}
										leftIcon={<Box as="i" className="bx bxs-id-card"></Box>}
										isTrue={false}
										val={depositorName}
										change={depoChan}
										labelName={"اسم المودع"}
									/>
									<Inputs
										placeH={"تاريخ الدفع"}
										typeInput={"date"}
										isTrue={false}
										val={paymentDate}
										change={pymentDChan}
										labelName={"تاريخ الدفع"}
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
												imaSrc
													? imaSrc
													: "https://dummyimage.com/250x150/000/fff"
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
							{/* Sign Button */}
							<Button
								onClick={() => {
									handelUser();
								}}
								colorScheme={"teal"}
								size="lg"
								mt="5"
								mb="5"
								w="100%"
							>
								تسجيل الحساب
							</Button>
							<Text className="flexR" fontSize={["sm", "md"]} fontWeight="400">
								هل تمتلك حساب بالفعل ؟
								<Link to="/login">
									<Text
										fontWeight="bold"
										color={"blue.400"}
										textDecoration="underline !important"
										mr="1"
									>
										سجيل دخول
									</Text>
								</Link>
							</Text>
						</Box>
					</Container>
				</VStack>
			</Containers>
		</>
	);
};

export default Signup;
