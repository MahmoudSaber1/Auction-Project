/* eslint-disable react-hooks/exhaustive-deps */
import {
	Avatar,
	Badge,
	Box,
	Button,
	Image,
	Input,
	Spinner,
	Table,
	TableContainer,
	Tbody,
	Td,
	Tr,
	useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TableHead from "./TableHead";
import TableTd from "./TableTd";
import HouseReq from "../../../Common/helpers/HouseReq";
import { AuctionState } from "../../../AuctionContext";
import { Link } from "react-router-dom";

export function numberWiThCommas(x) {
	return x.toSTring().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CustomersTable = () => {
	const [search, setSearch] = useState("");
	const [CustomerData, setCustomerData] = useState([]);
	const [loading, setLoading] = useState(false);
	const { showAllUsers } = HouseReq();
	const toast = useToast();

	const { setCalcUsers } = AuctionState();

	const handelUser = () => {
		// api call
		showAllUsers
			.get("/showUsers")
			.then((res) => {
				setCustomerData(res.data);
				setCalcUsers(res.data.length);
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
		}, 5000);

		return () => {
			clearInterval(setTIme);
		};
	}, []);

	const handelSearch = () => {
		return CustomerData.filter((customer) => {
			return customer.name.toLowerCase().includes(search);
		});
	};

	return (
		<>
			<Box
				w="full"
				boxShadow={"lg"}
				backgroundColor="gray.600"
				p="10"
				rounded={"lg"}
				mt="5"
			>
				<Input
					size="md"
					type={"text"}
					placeholder="ابحث عن اسم المستخدم"
					onChange={(e) => setSearch(e.target.value)}
					mb="5"
				/>

				<Box className="overflow-y-auto overflow-x-auto">
					<Box className="min-w-full flex items-center justify-center font-sans">
						<Box className="w-full">
							<TableContainer>
								<Table className="min-w-max w-full table-auto">
									<TableHead
										data={[
											"ID",
											"اسم المستخدم",
											"البريد الالكتروني",
											"الرقم القومي",
											"العنوان",
											"تاريخ الميلاد",
											"تاريخ التسجيل",
											"صورة ايصال الدفع",
											"رقم ايصال الدفع",
											"تاريخ الدفع",
											"اسم البنك",
											"الرقم الهاتف",
											"الرقم الخاص",
											"حالة المستخدم",
										]}
									/>
									{loading === true ? (
										<Tbody className="text-gray-200 text-sm font-light">
											{handelSearch().map((row) => {
												return (
													<Tr
														key={row.id}
														className="border-b border-gray-200 hover:bg-gray-500"
													>
														<TableTd tdData={row.id} />
														<Td className="py-3 px-6 text-center">
															<Link to={`/admin/users/${row.id}`}>
																<Box className="flex gap-2 items-center">
																	<Avatar size="sm" name={row.name} />{" "}
																	{row.name}
																</Box>
															</Link>
														</Td>
														<TableTd tdData={row.email} />
														<TableTd tdData={row.national_id} />
														<TableTd tdData={row.title} />
														<TableTd tdData={row.date} />
														<TableTd tdData={row.created_at} />
														<Td className="py-3 px-6 text-center">
															<Image
																w={"100%"}
																h={"10"}
																src={`https://mhouses.net/APIS/${row.payment_photo}`}
															/>
														</Td>
														<TableTd tdData={row.payment_number} />
														<TableTd tdData={row.payment_date} />
														<TableTd tdData={row.bank_name} />
														<TableTd tdData={row.phone} />
														<TableTd tdData={row.code} />
														<Td className="py-3 px-6 text-center">
															<Box className="flex item-center justify-center">
																<Link to={`/admin/users/${row.id}`}>
																	<Box
																		py="1"
																		px="2"
																		backgroundColor={`${"var(--main-color)"}`}
																		rounded="md"
																		as="i"
																		ml="2"
																		className="bx bx-show-alt"
																	></Box>
																</Link>
																{row.status === 0 ? (
																	<Button
																		onClick={() => {
																			updateUser(row.id);
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
																	>
																		تم التأكيد
																	</Badge>
																)}
															</Box>
														</Td>
													</Tr>
												);
											})}
										</Tbody>
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
								</Table>
							</TableContainer>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default CustomersTable;
