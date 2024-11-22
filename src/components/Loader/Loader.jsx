import { Flex, Spinner } from "@chakra-ui/react";
const Loader = () => {
  return (
    <Flex alignItems={"center"} justify={"center"} height={"90vh"}>
      <Spinner />
    </Flex>
  );
};

export default Loader;