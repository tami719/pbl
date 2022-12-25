import { Input, useColorModeValue } from '@chakra-ui/react'
import { Box, Text, Divider, Grid, GridItem } from "@chakra-ui/layout";
import { Header } from "./header";
import { Footer } from "./footer";

export const Login = () => {
    const color = useColorModeValue("#006400", "#000033")
  return (
    <Box  bg={color} opacity="0.8" color="#ffffff">
    <Box>
      <Header />
    </Box>

    <Box  h={100}>
      </Box>
    
    <Box w="30%" m="auto">
      <Input variant='outline' placeholder='name' size='md' />
      <Input variant='outline' placeholder='password' size='md' />
      <Box  h={1000}>
      </Box>
    </Box>
    <Box>
      <Footer />
    </Box>
    </Box>
  );
};

export default Login;