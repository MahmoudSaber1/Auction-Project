import { Button } from "@chakra-ui/react";
import React from "react";

const Buttons = ({ color, size, name, handelFunctions }) => {
	return (
		<Button onClick={handelFunctions} colorScheme={color} size={size}>
			{name}
		</Button>
	);
};

export default Buttons;
