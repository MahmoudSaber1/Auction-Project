import React, { useContext, createContext, useState } from "react";

const Auction = createContext();

const AuctionContext = ({ children }) => {
	const [screenSize, setScreenSize] = useState(undefined);
	const [activeMenu, setActiveMenu] = useState(true);
	const [Color, setColor] = useState("#03C9D7");
	const [HousesData, setHousesData] = useState([]);
	const [userHousesData, setUserHousesData] = useState([]);
	const [calcUsers, setCalcUsers] = useState("");
	const [userState, setUserState] = useState("");
	const [userName, setUserName] = useState("");
	const [userId, setUserId] = useState("");
	const [totalPrice, setTotalPrice] = useState("");

	return (
		<Auction.Provider
			value={{
				screenSize,
				setScreenSize,
				activeMenu,
				setActiveMenu,
				Color,
				setColor,
				HousesData,
				setHousesData,
				calcUsers,
				setCalcUsers,
				userState,
				setUserState,
				userName,
				setUserName,
				userId,
				setUserId,
				totalPrice,
				setTotalPrice,
				userHousesData,
				setUserHousesData,
			}}
		>
			{children}
		</Auction.Provider>
	);
};

export default AuctionContext;

export const AuctionState = () => {
	return useContext(Auction);
};
