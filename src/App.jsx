import { useState } from 'react'
import { Flex , ChakraProvider } from "@chakra-ui/react";
import Layout from './layouts/Layouts.jsx';
import PublicRouter from './router/PublicRouter.jsx';

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <ChakraProvider>
      <Layout>
        <PublicRouter />
      </Layout>
    </ChakraProvider>
      </>
  )
}

export default App
