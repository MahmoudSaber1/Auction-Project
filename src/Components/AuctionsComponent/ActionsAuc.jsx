/* eslint-disable react-hooks/exhaustive-deps */
import { Badge, Box, Button, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import HouseReq from "../../Common/helpers/HouseReq";
import GoInsurancer from "./GoInsurancer";

const ActionsAuc = ({ houseId, userID, increase }) => {
	const { addPrice, showPrices } = HouseReq();
	const toast = useToast();
	const [auctionInsurancer, setAuctionInsurancer] = useState();

	const addPriceToAuction = () => {
		// api call
		addPrice
			.post("/addAuctionUser", {
				house_id: houseId,
				user_id: userID,
				price: increase,
			})
			.then((res) => {
				toast({
					title: "تم اضافة المزايده بنجاح",
					status: "success",
					duration: 9000,
					isClosable: true,
					position: "top-right",
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const showAuctionInsurancer = () => {
		// api call
		showPrices
			.get(`/showAuctionInsurancer/${userID}/${houseId}`)
			.then((res) => {
				setAuctionInsurancer(res.data.status_insurance);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	useEffect(() => {
		const setTIme = setInterval(() => {
			showAuctionInsurancer();
		}, 5000);

		return () => {
			clearInterval(setTIme);
		};
	}, []);

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
				{auctionInsurancer === 0 || auctionInsurancer === undefined ? (
					<GoInsurancer hId={houseId} uId={userID} />
				) : (
					<>
						<Button
							onClick={() => {
								addPriceToAuction();
							}}
							colorScheme={"green"}
						>
							+ اضافة مزايده
						</Button>
						<Badge
							py="3"
							fontSize={["sm", "md", "md"]}
							rounded="md"
							variant="solid"
							colorScheme="blackAlpha"
						>
							الرفعه الواحده بي : {increase} جنيه
						</Badge>
					</>
				)}
			</Box>
		</>
	);
};

export default ActionsAuc;
