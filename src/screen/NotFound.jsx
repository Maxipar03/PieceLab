import React from "react";
import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router";

export const NotFound = () => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Heading>404 NotFound</Heading>
      <Text>Parece que no encotramos la pagina solicitada</Text>
      <Link to={"/"}><Button>Volver al Home</Button></Link>
    </Flex>
  );
};