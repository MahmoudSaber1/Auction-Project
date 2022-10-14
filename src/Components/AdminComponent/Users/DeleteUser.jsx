import {
	Box,
	Button,
	ButtonGroup,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverFooter,
	PopoverHeader,
	PopoverTrigger,
	useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const DeleteUser = () => {
	const { isOpen, onToggle, onClose } = useDisclosure();

	return (
		<>
			<Popover
				returnFocusOnClose={false}
				isOpen={isOpen}
				onClose={onClose}
				placement="top"
				closeOnBlur={false}
			>
				<PopoverTrigger>
					<Box
						onClick={onToggle}
						className="w-4 mr-2 cursor-pointer transform hover:text-purple-500 hover:scale-110"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
							/>
						</svg>
					</Box>
				</PopoverTrigger>
				<PopoverContent backgroundColor={`${"var(--main-color)"}`}>
					<PopoverHeader textAlign={"center"} fontWeight="semibold">
						تأكيد الحذف
					</PopoverHeader>
					<PopoverCloseButton />
					<PopoverArrow />
					<PopoverBody>هل انت متأكد بأنك تريد حذف هذا المستخدم؟</PopoverBody>
					<PopoverFooter display="flex" justifyContent="flex-end">
						<ButtonGroup size="sm">
							<Button
								variant="solid"
								colorScheme={"facebook"}
								onClick={onClose}
							>
								Cancel
							</Button>
							<Button colorScheme="red" onClick={onClose}>
								Yes
							</Button>
						</ButtonGroup>
					</PopoverFooter>
				</PopoverContent>
			</Popover>
		</>
	);
};

export default DeleteUser;
