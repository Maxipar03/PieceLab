import { useState } from 'react'
import { Flex , ChakraProvider } from "@chakra-ui/react";
import Layout from './layouts/layouts.jsx';
import Home from './screen/Home.jsx';

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <ChakraProvider>
      <Layout>
        <Home/>
      </Layout>
    </ChakraProvider>
      </>
  )
}

export default App
