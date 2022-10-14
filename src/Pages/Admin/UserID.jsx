/* eslint-disable react-hooks/exhaustive-deps */
import {
	Badge,
	Box,
	Button,
	Container,
	Flex,
	Image,
	Spinner,
	Text,
	useToast,
	VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import HouseReq from "../../Common/helpers/HouseReq";
import { AdminContainer, TextData } from "../../Components/AdminComponent";

const UserID = () => {
	const [CustomerData, setCustomerData] = useState([]);
	const [loading, setLoading] = useState(false);
	const { showAllUsers } = HouseReq();
	const toast = useToast();

	const handelUser = () => {
		// api call
		showAllUsers
			.get("/showUsers")
			.then((res) => {
				setCustomerData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const updateUser = (id) => {
		// api call
		showAllUsers
			.put(`/updateUserStatus/${id}?status=1`)
			.then((res) => {
				toast({
					title: res.data,
					status: "success",
					duration: 9000,
					isClosable: true,
					position: "top-right",
				});
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

	useEffect(() => {
		const setTIme = setInterval(() => {
			setLoading(true);
			handelUser();
		}, 2000);

		return () => {
			clearInterval(setTIme);
		};
	}, []);

	const page = window.location.pathname;
	const current = parseInt(page.split("/").slice(-1)[0]);

	return (
		<>
			<AdminContainer>
				<VStack alignItems={"center"} justifyContent="center">
					<Container maxW={["6xl"]}>
						<Flex
							w="full"
							alignItems={"center"}
							justifyContent={"space-between"}
							className="section-padding"
							gap="10"
							flexDirection={["column", "column", "row"]}
						>
							<Box
								_hover={{ boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" }}
								backgroundColor={`${"var(--main-color)"}`}
								rounded="md"
								w="full"
								className="flexR"
								flexDirection={["column", "column", "row"]}
								gap={"5"}
								transition="0.3s"
								py="10"
								px="5"
							>
								{loading === true ? (
									<>
										{CustomerData.filter((customer) => {
											return customer.id === current;
										}).map((user) => (
											<>
												<Box
													className="flexR"
													flex="1"
													flexDirection={"column"}
													gap="5"
													order={["1", "1", "0"]}
												>
													<Box
														display={"flex"}
														gap="5"
														flexDirection={["column"]}
													>
														<TextData
															bodyName={"اسم المستخدم"}
															headName={user.name}
														/>
														<TextData
															bodyName={"الرقم القومي"}
															headName={user.national_id}
														/>
													</Box>
													<Box
														display={"flex"}
														gap="5"
														flexDirection={["column"]}
													>
														<TextData
															bodyName={"البريد الالكتروني"}
															headName={user.email}
														/>
														<TextData
															bodyName={"العنوان"}
															headName={user.title}
														/>
													</Box>
													<Box
														display={"flex"}
														gap="5"
														flexDirection={["column"]}
													>
														<TextData
															bodyName={"تاريخ الميلاد"}
															headName={user.date}
														/>
													</Box>
													<Box
														display={"flex"}
														gap="5"
														flexDirection={["column"]}
													>
														<TextData
															bodyName={"تاريخ الدفع"}
															headName={user.payment_date}
														/>
														<TextData
															bodyName={"رقم ايصال الدفع"}
															headName={user.payment_number}
														/>
													</Box>
													<Box
														display={"flex"}
														gap="5"
														flexDirection={["column"]}
													>
														<TextData
															bodyName={"اسم البنك"}
															headName={user.bank_name}
														/>
														<TextData
															bodyName={"رقم الهاتف"}
															headName={user.phone}
														/>
														<TextData
															bodyName={"الرقم الخاص"}
															headName={user.code}
														/>
													</Box>
													<Box
														className="flex item-center justify-center"
														w="100%"
													>
														{user.status === 0 ? (
															<Button
																onClick={() => {
																	updateUser(user.id);
																}}
																size="sm"
																colorScheme={"red"}
															>
																تاكيد الدفع
															</Button>
														) : (
															<Badge
																colorScheme={"green"}
																variant="solid"
																py="1"
																px="8"
																textAlign={"center"}
																fontSize={["sm", "md", "lg"]}
															>
																تم التأكيد
															</Badge>
														)}
													</Box>
												</Box>
												<Box w={"320px"} flex="1" rounded="md">
													<Text
														mb="2"
														className="flexR"
														gap="1"
														fontSize={("md", "lg", "xl")}
													>
														صورة <Text color="#03C9D7">ايصال الدفع</Text>
													</Text>
													<Image
														rounded="md"
														w="full"
														src={`https://mhouses.net/APIS/${user.payment_photo}`}
													/>
												</Box>
											</>
										))}
									</>
								) : (
									<Box
										display={"flex"}
										alignItems="center"
										justifyContent={"center"}
										w="full"
										py="5"
									>
										<Spinner
											thickness="4px"
											speed="0.65s"
											emptyColor="gray.200"
											color="teal.500"
											size="lg"
										/>
									</Box>
								)}
							</Box>
						</Flex>
					</Container>
				</VStack>
			</AdminContainer>
		</>
	);
};

export default UserID;
