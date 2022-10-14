import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthUser() {
	const navigate = useNavigate();

	const getToken = () => {
		const tokenString = sessionStorage.getItem("userToken");
		const userToken = JSON.parse(tokenString);
		return userToken;
	};

	const getUser = () => {
		const userString = sessionStorage.getItem("user");
		const user_detail = JSON.parse(userString);
		return user_detail;
	};

	const getLogin = () => {
		const userLogin = sessionStorage.getItem("userLogedIn");
		const user_login = JSON.parse(userLogin);
		return user_login;
	};

	const [userToken, setUserToken] = useState(getToken());
	const [user, setUser] = useState(getUser());
	const [userLogedIn, setUserLogedIn] = useState(getLogin());

	const saveToken = (user, logedIn, token) => {
		sessionStorage.setItem("userToken", JSON.stringify(token));
		sessionStorage.setItem("user", JSON.stringify(user));
		sessionStorage.setItem("userLogedIn", JSON.stringify(logedIn));
		setUserToken(token);
		setUser(user);
		setUserLogedIn(logedIn);
		navigate("/user");
	};

	const logout = () => {
		sessionStorage.removeItem("user");
		sessionStorage.removeItem("userLogedIn");
		sessionStorage.removeItem("userToken");
		navigate("/login");
	};

	const http = axios.create({
		baseURL: "https://mhouses.net/APIS/api/user",
		headers: {
			"Content-type": "application/json",
		},
	});
	return {
		setUser: saveToken,
		user,
		userToken,
		http,
		logout,
		userLogedIn,
	};
}
