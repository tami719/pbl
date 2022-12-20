import { Box, Container } from "@chakra-ui/layout";
import { Header } from "./header";
import { TopWorks } from "./works";
import { Footer } from "./footer";
import { Image } from "@chakra-ui/image";
import React from "react";
import Script from 'next/script';
import { StylesProvider } from "@chakra-ui/react";
import Styles from './cursor.module.css';

const Index = () => (
  <React.Fragment>
  <Box className={Styles.container}>
    <Box>
      <Header />
    </Box>
    <Box>
      <TopWorks />
    </Box>
    <Box>
      <Footer />
    </Box>
  </Box>
  </React.Fragment>
);

export default Index;
