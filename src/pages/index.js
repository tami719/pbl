import { Box, Container } from "@chakra-ui/layout";
import { Header } from "./header";
import { TopWorks } from "./works";
import { Footer } from "./footer";
import { Image } from "@chakra-ui/image";
import React from "react";
import Script from 'next/script';
import { StylesProvider, useColorModeValue } from "@chakra-ui/react";
import Styles from './cursor.module.css';

//const Index = () => (
export const Index = () => {
    const color = useColorModeValue("#006400", "#000033")
  return (
  <Box className={Styles.container}  w={"100%"} bg={color} opacity="0.8" color="#ffffff">
    <Box>
      <Header />
    </Box>
    <Box className={Styles.zoomIn}>
      <TopWorks />
    </Box>
    <Box>
      <Footer />
    </Box>
  </Box>
);
};

export default Index;
