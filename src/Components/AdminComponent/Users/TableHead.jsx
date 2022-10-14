import { Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

const TableHead = ({ data }) => {
	return (
		<>
			<Thead>
				<Tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
					{data.map((head) => (
						<Th key={head}>{head}</Th>
					))}
				</Tr>
			</Thead>
		</>
	);
};

export default TableHead;
