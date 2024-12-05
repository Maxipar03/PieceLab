import { Flex } from "@chakra-ui/react";
import NavBar from "../components/NavBar/NavBar";

const Layout = ({ children }) => {
    return (
        <Flex flexDirection={"column"} minHeight={"100vh"}>
            {children}
        </Flex>
    );
};

export default Layout;