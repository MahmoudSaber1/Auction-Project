import {
	Avatar,
	Box,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Buttons from "../Buttons";

const AuthUser = ({ isAuth, user, logout }) => {
	return (
		<>
			{isAuth === true ? (
				<div className="flex z-50">
					<Menu>
						<MenuButton className="hover:bg-gray-500 rounded-lg">
							<Box className="flex items-center gap-2 cursor-pointer hover:bg-gray-500 p-1 rounded-lg">
								<Box
									as="i"
									className="text-white-400 text-14 bx bx-chevron-down"
								></Box>
								<p>
									<span className="text-white-400 text-14">مرحبا,</span>{" "}
									<span className="text-white-400 capitalize font-bold ml-1 text-14">
										{user.name}
									</span>
								</p>
								<Avatar size={"sm"} name={user.name} />
							</Box>
						</MenuButton>
						<MenuList>
							<Link to="/user">
								<MenuItem color="black">الصفحه الشخصيه</MenuItem>
							</Link>
							<MenuItem onClick={logout} color="red.400">
								تسجيل الخروج
							</MenuItem>
						</MenuList>
					</Menu>
				</div>
			) : (
				<Box className="flexR" gap="2">
					<Link to="/login">
						<Buttons color="blue" name="تسجيل دخول" size="sm" />
					</Link>
					<Link to="/signup">
						<Buttons color="green" name="+ حساب جديد" size="sm" />
					</Link>
				</Box>
			)}
		</>
	);
};

export default AuthUser;
