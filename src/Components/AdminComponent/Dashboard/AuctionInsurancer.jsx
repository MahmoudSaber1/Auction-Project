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
import TableHead from "../Users/TableHead";
import TableTd from "../Users/TableTd";
import HouseReq from "../../../Common/helpers/HouseReq";

export function numberWiThCommas(x) {
	return x.toSTring().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const AuctionInsurancer = () => {
	const [search, setSearch] = useState("");
	const [page] = useState(1);
	const [CustomerData, setCustomerData] = useState([]);
	const [loading, setLoading] = useState(false);
	const { addAuctionInsurancer } = HouseReq();
	const toast = useToast();

	const handelUser = () => {
		// api call
		addAuctionInsurancer
			.get("/showAuctionInsurancer")
			.then((res) => {
				setCustomerData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const updateUser = (id) => {
		// api call
		addAuctionInsurancer
			.put(`/updateInsurancerStatus/${id}?status_insurance=1`)
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
			return customer.user.name.toLowerCase().includes(search);
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
											"الكود الخاص",
											"صورة ايصال الدفع",
											"رقم ايصال الدفع",
											"اسم البنك",
											"حالة المستخدم",
										]}
									/>
									{loading === true ? (
										<Tbody className="text-gray-200 text-sm font-light">
											{handelSearch()
												.slice((page - 1) * 5, (page - 1) * 5 + 5)
												.map((row) => {
													return (
														<Tr
															key={row.id}
															className="border-b border-gray-200 hover:bg-gray-500"
														>
															<TableTd tdData={row.id} />
															<Td className="py-3 px-6 text-center">
																<Box className="flex gap-2 items-center">
																	<Avatar size="sm" name={row.user.name} />{" "}
																	{row.user.name}
																</Box>
															</Td>
															<TableTd tdData={row.user.email} />
															<TableTd tdData={row.user.code} />
															<Td className="py-3 px-6 text-center">
																<Image
																	w={"100%"}
																	h={"10"}
																	src={`https://mhouses.net/APIS/uploads/payments/${row.auction_photo}`}
																/>
															</Td>
															<TableTd tdData={row.payment_number} />
															<TableTd tdData={row.bank_name} />
															<Td className="py-3 px-6 text-center">
																<Box className="flex item-center justify-center">
																	{row.status_insurance === 0 ? (
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

export default AuctionInsurancer;
