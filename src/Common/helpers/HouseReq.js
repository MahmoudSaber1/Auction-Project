import axios from "axios";
import LogUser from "./LogUser";
import AuthAdmin from "./AuthAdmin";

export default function HouseReq() {
	const { userToken } = LogUser();
	const { token } = AuthAdmin();
	const houseReq = axios.create({
		baseURL: "https://mhouses.net/APIS/api/admin",
		headers: {
			"Content-type": "multipart/form-data",
			Authorization: `Bearer ${token}`,
		},
	});
	const houseUpdate = axios.create({
		baseURL: "https://mhouses.net/APIS/api/admin",
		headers: {
			"Content-type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	});
	const showAllUsers = axios.create({
		baseURL: "https://mhouses.net/APIS/api/admin",
		headers: {
			"Content-type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	});
	const addPrice = axios.create({
		baseURL: "https://mhouses.net/APIS/api/user",
		headers: {
			"Content-type": "application/json",
			Authorization: `Bearer ${userToken}`,
		},
	});
	const showPrices = axios.create({
		baseURL: "https://mhouses.net/APIS/api/user",
		headers: {
			"Content-type": "application/json",
			Authorization: `Bearer ${userToken}`,
		},
	});
	const addAuctionInsurancer = axios.create({
		baseURL: "https://mhouses.net/APIS/api/user",
		headers: {
			"Content-type": "multipart/form-data",
			Authorization: `Bearer ${userToken}`,
		},
	});
	const termsReference = axios.create({
		baseURL: "https://mhouses.net/APIS/api/user",
		headers: {
			"Content-type": "application/json",
			Authorization: `Bearer ${userToken}`,
		},
	});
	return {
		houseReq,
		houseUpdate,
		showAllUsers,
		addPrice,
		showPrices,
		addAuctionInsurancer,
		termsReference,
	};
}
