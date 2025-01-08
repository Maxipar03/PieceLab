import { Card, Button, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Image, Text, Flex } from '@chakra-ui/react'
import { Link } from 'react-router';

export const ItemCard = ({ products }) => {
    console.log(products)

    return (
        <Card
                key={products.id}
                maxW={{ base: "100%", md: "48%", lg: "23%" }}
                w="100%"
            >
        <Link to={`/item/${products.id}`}>
                <CardBody>
                    <Image
                        src={products.images[0]}
                        alt={products.title}
                        borderRadius='lg'
                        maxHeight={250}
                        width="100%"
                        objectFit="cover"
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{products.title}</Heading>
                        <Text>{products.description}</Text>
                        <Text color='blue.600' fontSize='2xl'>
                            {products.price}
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
                </Link>
            </Card>
    );

};
