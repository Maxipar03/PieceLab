import { Card, Button, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Image, Text, Flex } from '@chakra-ui/react'

const ItemListContainer = ({ products }) => {
    console.log(products)

    return (
        <Flex justifyContent="space-between" flexWrap="wrap" gap="4" p="4">
            {products.map((product) => (
                <Card
                    key={product.id}
                    maxW={{ base: "100%", md: "48%", lg: "23%" }} 
                    w="100%"
                >
                    <CardBody>
                        <Image
                            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                            alt={product.name}
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{product.name}</Heading>
                            <Text>{product.description}</Text>
                            <Text color='blue.600' fontSize='2xl'>
                                $450
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='blue'>
                                Buy now
                            </Button>
                            <Button variant='ghost' colorScheme='blue'>
                                Add to cart
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            ))}
        </Flex>
    );

};

export default ItemListContainer;