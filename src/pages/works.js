import { Box, Text, Divider, Grid, GridItem } from "@chakra-ui/layout";
import { Button, useColorMode, useColorModeValue} from "@chakra-ui/react";
import { Link as Scroll } from 'react-scroll';
import React from "react";
import { motion } from "framer-motion";
import { Image } from "@chakra-ui/image";
import Script from 'next/script';
import Link from 'next/link';
import Styles from './cursor.module.css';
import Styles2 from './part.module.css';
import Santa from "./santa.png";
import Santa2 from "./santa2.png";
import Tona from "./tona.png";

export const TopWorks = () => {
    const color = useColorModeValue("#006400", "#000")

  return (
    <Box bg={color} opacity="0.8" color="#ffffff" style={{"scroll-behavior": "smooth"}}>
      <Grid templateColumns='repeat(20, 1fr)' gap={1}>
     <GridItem colSpan={3}>
     <Box  h={200}>
      </Box>
     <Box display="flex" justifyContent="center" m="auto">
     <Image 
              boxSize="250px"
              src={Tona.src} />

        </Box>
    </GridItem>
      <GridItem colSpan={14}>
      <Box textAlign="center">

        <Box>
          <Text fontFamily="Impact" fontSize={100} style={{"text-shadow" : "0 0 0.10em #FFD700,	0 0 0.15em #FFD700, 0 0 0.80em #FFD700,	0 0 1.00em #FFD700"}}>
            kitasan & mila
          </Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt={10}
          mb={10}
        >
          
        </Box>
      </Box>


        <Box
        className={Styles.container2}
        boxShadow='dark-lg'
          p={10}
          w="300px"
          bg="000"
          border="1px solid #ffffff"
          borderRadius="4px"
          m="auto"
          _hover={{ border: "1px solid #FF3333", color:"#FF3333" }}
        >
          
          <Text fontSize="3xl" fontFamily="cursive" style={{"text-align": "center"}}>
          <Link href='/login'>Game Start</Link>
          </Text>
        </Box>

        <Box  h={10}>
      </Box>

        <Box
        className={Styles.container2}
        boxShadow='dark-lg'
          p={10}
          w="300px"
          bg="000"
          border="1px solid #ffffff"
          borderRadius="4px"
          m="auto"
          _hover={{ border: "1px solid #FF3333", color:"#FF3333" }}
        >         
          <Text fontSize="3xl" fontFamily="cursive" style={{"text-align": "center"}}>
          <Scroll to="1" smooth={true} >Rule</Scroll>
          </Text>
        </Box>

      <Box  h={100}>
      </Box>

      <Divider borderColor="#FFFFFF" w={"100%"} m={"auto"}/>

        <Box h={100}></Box>

        <Box pb={20} id="1">
        <Text fontFamily="fantasy" fontSize={72} className={Styles.fuwafuwa}>
            Rule
          </Text>
          <Text fontSize="2xl" fontFamily="Rajdhani">
          　日本の三連覇のラッパー「R-指定」と、世界一のDJ「DJ 松永」による、HIP HOPユニット。
2017年Sony Musicよりメジャーデビューし、2020年8月に「かつて天才だった俺たちへ」をリリース。
2021年アルバム「Case」をリリース。収録曲「のびしろ」がTikTokで1億回再生を越えるなど、その他SNSでも注目を集めている。 9月にアルバムを引っ提げた全国ツアーは横浜アリーナを含む公演全てが完売。ニッポン放送「Creepy Nuts のオールナイトニッポン」、CMやドラマなど多方面で活躍を見せる。
          </Text>
        </Box>

      <Box  h={100}>
      </Box>

      <Divider borderColor="#FFFFFF" w={"100%"} m={"auto"}/>
      <Box  h={100}>
      </Box>
      </GridItem>

      <GridItem colSpan={3}>
      <Box  h={200}>
      </Box>
     <Box display="flex" justifyContent="center" m="auto">
            <Image 
              boxSize="250px"
              src={Santa.src} />

        </Box>
    </GridItem>
    </Grid>

    <Box textAlign="center">
    <Button colorScheme='teal' variant='outline' color="#FFD700">
    <Link href='#'>top</Link>
  </Button>
  <Image 
              boxSize="250px"
              m={"auto"}
              src={Santa2.src} />
      </Box>

    <Box  h={200}>
      </Box>
    </Box>

  );
};
