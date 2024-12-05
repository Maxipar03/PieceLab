import { Card, Button, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Image, Text, Flex } from '@chakra-ui/react'
import { Link } from 'react-router';

const ItemCard = ({ products }) => {
    console.log(products)

    return (
        <Link to={`/item/${products.id}`}>
        <Flex justifyContent="space-between" flexWrap="wrap" gap="4" p="4">
            {products.map((product) => (
                <Card
                    key={product.id}
                    maxW={{ base: "100%", md: "48%", lg: "23%" }} 
                    w="100%"
                >
                    <CardBody>
                        <Image
                            src={product.image}
                            alt={product.name}
                            borderRadius='lg'
                            maxHeight={250}
                            width="100%"
                              objectFit="cover"
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
        </Link>
    );

};

export default ItemCard;