import axios from "axios";

export default function RegUser() {
	const addUser = axios.create({
		baseURL: "https://mhouses.net/APIS/api/user",
		headers: {
			"Content-type": "multipart/form-data",
		},
	});
	return {
		addUser,
	};
}
