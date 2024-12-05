import { Link } from "react-router-dom";

import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, ChevronDownIcon } from "@chakra-ui/icons";

import { useGetAllCategories } from "../../hooks/useGetAllCategories";

import CartWidget from "../CartWidget/CartWidger.jsx"

const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    const { categories } = useGetAllCategories();

    return (
        <>
            <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    <Box>
                        <Link to="/">PiceLab</Link>
                    </Box>

                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            Categorias
                        </MenuButton>
                        <MenuList height={"300px"} overflowY={"scroll"}>
                            {categories.map((category) => {
                                return (
                                    <MenuItem key={category}>
                                        <Link to={`/category/${category}`}>
                                            {category}
                                        </Link>
                                    </MenuItem>
                                );
                            })}
                        </MenuList>
                    </Menu>

                    <Flex alignItems={"center"}>
                        <CartWidget />
                        <Stack direction={"row"} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                            </Button>
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={"full"}
                                    variant={"link"}
                                    cursor={"pointer"}
                                    minW={0}
                                >
                                    <Avatar
                                        size={"sm"}
                                        src={"https://avatars.dicebear.com/api/male/username.svg"}
                                    />
                                </MenuButton>
                                <MenuList alignItems={"center"}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={"2xl"}
                                            src={"https://avatars.dicebear.com/api/male/username.svg"}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>Username</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem>Your Servers</MenuItem>
                                    <MenuItem>Account Settings</MenuItem>
                                    <MenuItem>Logout</MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
};

export default NavBar