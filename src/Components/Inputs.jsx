import {
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
} from "@chakra-ui/react";
import React from "react";

const Inputs = ({
	placeH,
	typeInput,
	leftIcon,
	right,
	isTrue,
	rest,
	val,
	change,
	labelName,
}) => {
	return (
		<>
			<FormControl>
				<FormLabel>{labelName}</FormLabel>
				<InputGroup>
					<InputLeftElement color="gray.500" children={leftIcon} />
					<Input
						pr={rest}
						placeholder={placeH}
						type={typeInput}
						value={val}
						onChange={change}
						border={"1px solid #777 !important"}
					/>
					{isTrue && right}
				</InputGroup>
			</FormControl>
		</>
	);
};

export default Inputs;
