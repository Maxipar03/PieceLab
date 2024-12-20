import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";

export const CartWidget = () => {
    return (
        <Flex
            alignItems={"center"}
            marginRight={"30px"}
            justifyContent={"space-between"}
            width={"30px"}
        >
            <InfoOutlineIcon />
            <p>
                0
            </p>
        </Flex>
    );
};
