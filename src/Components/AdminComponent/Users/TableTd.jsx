import { Box, Td } from "@chakra-ui/react";
import React from "react";

const TableTd = ({ tdData }) => {
	return (
		<>
			<Td className="py-3 px-6 text-center whitespace-nowrap">
				<Box className="flex items-center">
					<Box as="span" className="font-medium">
						{tdData}
					</Box>
				</Box>
			</Td>
		</>
	);
};

export default TableTd;
