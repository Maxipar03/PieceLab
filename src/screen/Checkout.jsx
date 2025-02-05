import React, { useContext } from "react";
import {
    Box,
    Heading,
    Alert,
    AlertIcon,
    VStack,
    Flex,
    Text,
    HStack,
    IconButton,
    Spacer,
    Divider,
    Button,
    Image,
} from "@chakra-ui/react";
import { CartContext } from "../context";
import { MinusIcon, DeleteIcon, AddIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router";

export const Checkout = () => {
    const { cartState, addItem, removeItem, deleteItem } =
        useContext(CartContext);

    const total = cartState.reduce(
        (acc, item) => acc + item.price * item.qtyCartItem,
        0
    );

    const handleDeleteItem = (item) => {
        deleteItem(item);
    };

    const navigate = useNavigate();

    const handleNavigatePayment = () => {
        navigate("/payment");
    };

    return (
        <Box p={6} w="40%" mx="auto" h={"90vh"}>
            <Heading as="h2" size="lg" mb={6} textAlign="center">
                Detalle del Carrito
            </Heading>

            {cartState.length === 0 ? (
                <Alert status="info" borderRadius="md">
                    <AlertIcon />
                    Tu carrito está vacío.
                </Alert>
            ) : (
                <VStack spacing={4} align="stretch">
                    {cartState.map((item) => (
                        <Flex
                            key={item.id}
                            p={4}
                            borderWidth="1px"
                            borderRadius="md"
                            alignItems="center"
                            boxShadow="sm"
                        >
                            <Image
                                src={item.images[0]}
                                alt={item.title}
                                boxSize="100px"
                                objectFit="cover"
                                borderRadius="md"
                                mr={4}
                            />
                            <Box flex="1">
                                <Text fontSize="xl" fontWeight="bold">
                                    {item.title}
                                </Text>
                                <HStack spacing={4} mt={2}>
                                    <Text>Precio: ${item.price.toFixed(2)}</Text>
                                    <HStack>
                                        <IconButton
                                            aria-label="Disminuir cantidad"
                                            icon={<MinusIcon />}
                                            size="sm"
                                            onClick={() => removeItem(item)}
                                            isDisabled={item.qtyCartItem === 1}
                                        />
                                        <Text>{item.qtyCartItem}</Text>
                                        <IconButton
                                            aria-label="Aumentar cantidad"
                                            icon={<AddIcon />}
                                            size="sm"
                                            onClick={() => addItem(item)}
                                            isDisabled={item.qtyCartItem >= item.stock}
                                        />
                                    </HStack>
                                </HStack>
                            </Box>
                            <Spacer />
                            <HStack>
                                <Text fontWeight="bold">
                                    Subtotal: ${(item.price * item.qtyCartItem).toFixed(2)}
                                </Text>
                                <IconButton
                                    aria-label="Eliminar producto"
                                    icon={<DeleteIcon />}
                                    colorScheme="red"
                                    variant="outline"
                                    onClick={() => handleDeleteItem(item)}
                                />
                            </HStack>
                        </Flex>
                    ))}
                    <Divider />
                    <Flex alignItems="center">
                        <Text fontSize="2xl" fontWeight="bold">
                            Total: ${total.toFixed(2)}
                        </Text>
                        <Spacer />
                    </Flex>
                    <Button onClick={handleNavigatePayment}>Comprar</Button>
                </VStack>
            )}
        </Box>
    );
};