/* eslint-disable react-hooks/exhaustive-deps */
import {
	Box,
	Button,
	Container,
	Flex,
	FormControl,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
	useToast,
	VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogUser from "../../Common/helpers/LogUser";
import { Containers } from "../../Components";

const Login = () => {
	const toast = useToast();
	const navigate = useNavigate();
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);
	const [emails, setEmails] = useState("");
	const [password, setPassword] = useState("");

	const { http, setUser, userLogedIn } = LogUser();

	// Login Handel
	const handelLogin = () => {
		// api call
		http
			.post("/login", { email: emails, password: password })
			.then((res) => {
				setUser(res.data.user, true, res.data.authorisation.token);
				toast({
					title: "تسجيل دخول ناجح",
					status: "success",
					duration: 9000,
					isClosable: true,
					position: "top-right",
				});
			})
			.catch((err) => {
				toast({
					title: "تسجيل دخول خطأ",
					description:
						"البريد الالكتروني او كلمة السر خطأ، برجاء اعادة المحاوله ",
					status: "error",
					duration: 2000,
					isClosable: true,
					position: "top-right",
				});
			});
	};

	useEffect(() => {
		return () => {
			if (userLogedIn === true) {
				navigate("/");
			}
		};
	}, [userLogedIn]);

	return (
		<>
			<Containers>
				<VStack
					height={`${"calc(100vh - 64px)"}`}
					alignItems={"center"}
					justifyContent={"center"}
				>
					<Container maxW={["xl", "3xl", "6xl"]}>
						<Flex alignItems={"center"} justifyContent={"center"}>
							<Box
								w={["100%", "100%", "70%"]}
								backgroundColor={`${"var(--main-color)"}`}
								boxShadow={"lg"}
								borderRadius="md"
								py="10"
								px="10"
								className="flexR"
								flexDirection={"column"}
							>
								<Text
									textAlign={"center"}
									fontSize={["md", "xl", "4xl"]}
									padding="0px 0 30px"
								>
									تسجيل الدخول
								</Text>
								<FormControl>
									<InputGroup mb="8">
										<InputLeftElement
											pointerEvents="none"
											children={<Box as="i" className="bx bx-envelope"></Box>}
										/>
										<Input
											border={"1px solid gray !important"}
											type="email"
											placeholder="ادخل البريد الالكتروني"
											value={emails}
											onChange={(e) => {
												setEmails(e.target.value);
											}}
										/>
									</InputGroup>
									<InputGroup mb="8" size="md" borderColor={"#ddd"}>
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
										<Input
											border={"1px solid #777 !important"}
											type={show ? "text" : "password"}
											placeholder="ادخل كلمة السر"
											value={password}
											onChange={(e) => {
												setPassword(e.target.value);
											}}
										/>
									</InputGroup>
								</FormControl>
								<Button onClick={handelLogin} mb="5" colorScheme={"green"}>
									تسجيل الدخول
								</Button>
								<Text fontSize={["md", "lg", "xl"]}>
									ليس لديك حساب ؟
									<Link to="/signup">
										<Box
											textDecoration={"underline !important"}
											color={"blue.400"}
											mr="1"
											as="span"
										>
											حساب جديد
										</Box>
									</Link>
								</Text>
							</Box>
						</Flex>
					</Container>
				</VStack>
			</Containers>
		</>
	);
};

export default Login;
