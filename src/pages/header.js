import { Box, Text, Divider, Grid } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Link, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import deviceIcon from "./icon3.png";
import Styles from './cursor.module.css';
import React from "react";
//import { MoonIcon, SunIcon} from "@chakra-ui/icons";
//import MoonButtonIcon from "../images/brand/moon.svg";

export const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const color = useColorModeValue("#006400", "#000")
  return (
    
    <Box
      bg={color}
      opacity="0.9"
      color="#ffffff"
      h={24}
      display="flex"
      justifyContent="center"
      alignItems="center"
      className={Styles.container3}
    >

    <Box display="flex" justifyContent="center" className={Styles.wait}>
            <Image 
              boxSize="80px"
              src={deviceIcon.src} />
        </Box>

      <Divider w={"5%"} borderColor="#fff" opacity="0.5" ml={"5%"} />
      <Grid templateColumns="repeat(3, 1fr)" gap={6} ml={"5%"} mr={"5%"}>

        <Text
          fontSize="3xl"
          fontFamily="cursive"
          transition="all .0.2s"
          _hover={{ color:"#FF3333" }}
        >
        <Link href="https://tami719.github.io/mysite/">
          Home
          </Link>
        </Text>

        <Text
          fontSize="3xl"
          fontFamily="cursive"
          _hover={{ color:"#FF3333" }}
        >
        <Link href="https://tami719.github.io/mysite/introduce_mila/mila.html">
          mila
          </Link>
        </Text>

        <Text
          fontSize="3xl"
          fontFamily="cursive"
          _hover={{ color:"#FF3333" }}
        >
        <Link href="https://tami719.github.io/mysite/introduce_galaxy/introduce_galaxy.html">
          galaxy
          </Link>
        </Text>
      </Grid>
      <Divider
        h={14}
        orientation="vertical"
        borderColor="ffffff"
        opacity="1"
        mr={"5%"}
      />

      <Button onClick={toggleColorMode} bg={color} className={Styles.fuwafuwa}>
        {colorMode === 'light' ? '🎄' : '🎅'}
      </Button>
    </Box>
  );
};
