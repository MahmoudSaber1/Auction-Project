import { Text } from "@chakra-ui/react";
import React from "react";

const TextData = ({ headName, bodyName }) => {
	return (
		<>
			<Text
				boxShadow={"0px 5px 15px rgba(0,0,0,0.2)"}
				padding={["3px 8px"]}
				className="flexR"
				gap="1"
				fontSize={("12px", "md", "lg")}
			>
				{bodyName} :
				<Text fontSize={("10px", "md", "lg")} color="#03C9D7">
					{headName}
				</Text>
			</Text>
		</>
	);
};

export default TextData;
