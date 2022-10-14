import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthUser() {
	const navigate = useNavigate();

	const getToken = () => {
		const tokenString = sessionStorage.getItem("token");
		const userToken = JSON.parse(tokenString);
		return userToken;
	};

	const getUser = () => {
		const userString = sessionStorage.getItem("admin");
		const user_detail = JSON.parse(userString);
		return user_detail;
	};

	const getLogin = () => {
		const userLogin = sessionStorage.getItem("logedIn");
		const user_login = JSON.parse(userLogin);
		return user_login;
	};

	const expireTime = () => {
		const expireTime = sessionStorage.getItem("expireTime");
		const admin_expire = JSON.parse(expireTime);
		return admin_expire;
	};

	const [token, setToken] = useState(getToken());
	const [user, setUser] = useState(getUser());
	const [logedIn, setLogedIn] = useState(getLogin());
	const [expire, setExpire] = useState(expireTime());

	const saveToken = (user, token, logedIn, expire) => {
		sessionStorage.setItem("token", JSON.stringify(token));
		sessionStorage.setItem("admin", JSON.stringify(user));
		sessionStorage.setItem("logedIn", JSON.stringify(logedIn));
		sessionStorage.setItem("expireTime", JSON.stringify(expire));

		setToken(token);
		setUser(user);
		setLogedIn(logedIn);
		setExpire(expire);
		navigate("/admin/auctions");
	};

	const logout = () => {
		sessionStorage.removeItem("token");
		sessionStorage.removeItem("admin");
		sessionStorage.removeItem("logedIn");
		navigate("/admin");
	};

	const http = axios.create({
		baseURL: "https://mhouses.net/APIS/api",
		headers: {
			"Content-type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	});
	return {
		setToken: saveToken,
		token,
		user,
		expire,
		getToken,
		http,
		logout,
		logedIn,
	};
}
