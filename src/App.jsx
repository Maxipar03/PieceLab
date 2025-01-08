import { useState } from 'react'
import { Flex, ChakraProvider } from "@chakra-ui/react";
import Layout from './layouts/Layouts.jsx';
import PublicRouter from './router/PublicRouter.jsx';
import { CartProvider } from './context/CartContext.jsx';

function App() {
  const [count, setCount] = useState(0)


  return (
      <CartProvider>
        <ChakraProvider>
          <Layout>
            <PublicRouter />
          </Layout>
        </ChakraProvider>
      </CartProvider>
  )
}

export default App
