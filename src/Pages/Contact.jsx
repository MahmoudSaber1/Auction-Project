import { Box, Container, Flex, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Containers } from "../Components";
import { Heading } from "../Components";

const social = [
	{
		icon: "bx bxl-whatsapp",
		to: "https://wa.me/+201005616519",
	},
	{
		icon: "bx bxl-facebook",
		to: "https://www.facebook.com/profile.php?id=100086355412960&is_tour_dismissed=true",
	},
];

const emails = [
	{ id: 1, email: "info@mhouses.net" },
	{ id: 2, email: "support@mhouses.net" },
	{ id: 3, email: "marketting@mhouses.net" },
	{ id: 4, email: "winner@mhouses.net" },
];

const Contact = () => {
	return (
		<>
			<Containers>
				<VStack alignItems={"center"} justifyContent="center">
					<Container maxW={["6xl"]}>
						<Box
							backgroundColor={`${"var(--main-color)"}`}
							rounded="md"
							mt="10"
							py="5"
						>
							<Heading title={"تواصل معنا"} />
						</Box>
						<Flex
							alignItems={"center"}
							justifyContent={"center"}
							gap="5"
							flexDirection={["column", "column", "row"]}
							className="section-padding"
						>
							<Box
								backgroundColor={`${"var(--main-color)"}`}
								rounded="md"
								w="100%"
								py="10"
								px="5"
								textAlign={"center"}
							>
								<Heading title={"مواقع التواصل"} />
								<Box
									className="flexR"
									flexDirection={["column", "column", "row"]}
									gap={["5", "5", "5"]}
									w="100%"
								>
									{social.map((soc, index) => (
										<Box
											key={index}
											className="flexR rotate"
											backgroundColor={"teal.500"}
											w="40px"
											h="40px"
											rounded={"full"}
											cursor={"pointer"}
											flexDirection={["column", "column", "row"]}
										>
											<Link target={"_blank"} href={soc.to}>
												<Box
													as="i"
													fontSize={"2xl"}
													transition="0.3s"
													className={soc.icon}
												></Box>
											</Link>
										</Box>
									))}
								</Box>
							</Box>
							<Box
								backgroundColor={`${"var(--main-color)"}`}
								rounded="md"
								w="100%"
								py="10"
								px="5"
								textAlign={"center"}
							>
								<Heading title={"البريد الالكتروني"} />
								{emails.map((email) => (
									<Link key={email.id} href={`mailto:${email.email}`}>
										<Box
											className="flexR"
											gap={"2"}
											textTransform={"lowercase"}
											lineHeight="2"
										>
											<Text order={"1"}> - {email.id}</Text>{" "}
											<Text>{email.email}</Text>
										</Box>
									</Link>
								))}
							</Box>
						</Flex>
					</Container>
				</VStack>
			</Containers>
		</>
	);
};

export default Contact;
