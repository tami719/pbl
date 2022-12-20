import { Box, Text, Divider, Grid, GridItem } from "@chakra-ui/layout";
import { Button, useColorMode, useColorModeValue} from "@chakra-ui/react";
import deviceIcon from "../images/piano.jpg";
import { Link as Scroll } from 'react-scroll';
import React from "react";
import { motion } from "framer-motion";
import Script from 'next/script';
import Link from 'next/link';
import Styles from './part.module.css';

export const TopWorks = () => {
    const color = useColorModeValue("#006400", "#000033")

  return (
    <Box bg={color} opacity="0.8" color="#ffffff" pt={28} pb={28}>
      <Box textAlign="center">


    <Box className={Styles.particlesj}></Box>
    <Box className={Styles.wrapper}></Box>
      <Script
                src="https://code.jquery.com/jquery-3.6.0.min.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
      <Script
                src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
      <Script
               src={"./5-5.js"}
               strategy="beforeInteractive"
               onLoad={() => {
    // If loaded successfully, then you can load other scripts in sequence
                }}
/>


        <Box mt={10}>
          <Text fontFamily="Roboto" fontWeight="bold" fontSize={108} style={{"text-shadow" : "0 0 0.10em #DD0000,	0 0 0.15em #DD0000, 0 0 0.80em #DD0000,	0 0 1.00em #DD0000"}}>
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
        style={{cursor: "cell"}}
        boxShadow='dark-lg'
          p={10}
          w="20%"
          bg="000"
          border="1px solid #ffffff"
          borderRadius="4px"
          m="auto"
          _hover={{ border: "1px solid rgba(236, 201, 75, 0.8)", color:"#ECC94B" }}
        >
          
          <Text fontSize="3xl" fontFamily="cursive" style={{"text-align": "center"}}>
          <Link href='/login'>Game Start</Link>
          </Text>
        </Box>

        <Box  h={10}>
      </Box>

        <Box
        style={{cursor: "cell"}}
        boxShadow='dark-lg'
          p={10}
          w="20%"
          bg="000"
          border="1px solid #ffffff"
          borderRadius="4px"
          m="auto"
          _hover={{ border: "1px solid rgba(236, 201, 75, 0.8)", color:"#ECC94B" }}
        >         
          <Text fontSize="3xl" fontFamily="cursive" style={{"text-align": "center"}}>
          <Scroll to="concept" smooth={true} >Rule</Scroll>
          </Text>
        </Box>

      <Box  h={100}>
      </Box>

      <Divider borderColor="#FFFFFF" w={1000} mx={100}/>

      <Box id="1" textAlign="center" mt={100}>
          <Text fontFamily="fantasy" fontWeight="bold" fontSize={72}>
            Rule
          </Text>
        </Box>

        <Grid
        templateColumns="repeat(3, 1fr)"
        gap={50}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
        boxShadow='dark-lg'
          p={10}
          border="1px solid #ffffff"
          borderRadius="4px"
          _hover={{ border: "1px solid rgba(236, 201, 75, 0.8)", color:"#ECC94B"}}
        >

        <Text fontSize="3xl" fontFamily="Rajdhani">
          <Scroll to="3" smooth={true} >Creepy Nuts</Scroll>
          </Text>
        </Box>

        <Box
        boxShadow='dark-lg'
          p={10}
          border="1px solid #ffffff"
          borderRadius="4px"
          _hover={{ border: "1px solid rgba(236, 201, 75, 0.8)", color:"#ECC94B"}}
        >

        <Text fontSize="3xl" fontFamily="Rajdhani">
          <Scroll to="4" smooth={true} >YOASOBI</Scroll>
          </Text>
        </Box>
        </Grid>

        <Box h={100}></Box>

        <Box px={40} pb={20} id="3">
        <Text fontFamily="Roboto" fontWeight="bold" fontSize={50}>
            Creepy Nuts
          </Text>
          <Text fontSize="2xl" fontFamily="Rajdhani">
          　日本の三連覇のラッパー「R-指定」と、世界一のDJ「DJ 松永」による、HIP HOPユニット。
2017年Sony Musicよりメジャーデビューし、2020年8月に「かつて天才だった俺たちへ」をリリース。
2021年アルバム「Case」をリリース。収録曲「のびしろ」がTikTokで1億回再生を越えるなど、その他SNSでも注目を集めている。 9月にアルバムを引っ提げた全国ツアーは横浜アリーナを含む公演全てが完売。ニッポン放送「Creepy Nuts のオールナイトニッポン」、CMやドラマなど多方面で活躍を見せる。
          </Text>
        </Box>


      <Box Align="center" >
        <Grid
          templateColumns='repeat(2, 1fr)'
        gap={20}
        display="flex"
        alignItems="center"
        justifyContent="center">
    <Box boxShadow='dark-lg'>
    <iframe width="448" height="252" src="https://www.youtube.com/embed/iZtDuxKztgA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <Text p={2} fontFamily="Roboto" fontWeight="bold" fontSize={20}>
            "2way nice guy"
          </Text>
          <Text p={2} Align="left" fontFamily="Roboto" fontWeight="bold" fontSize={18}>
            まさかって所にハマる...
          </Text>
    </Box>
    <Box boxShadow='dark-lg'>
    <iframe width="448" height="252" src="https://www.youtube.com/embed/E6A7l1l6kKE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <Text p={2} fontFamily="Roboto" fontWeight="bold" fontSize={20}>
            "サントラ"
          </Text>
          <Text p={2} Align="left" fontFamily="Roboto" fontWeight="bold" fontSize={18}>
            生々しく書き上げてく自分だけの生き方を...
          </Text>
    </Box>
      </Grid>
      </Box>


      <Box  h={100}>
      </Box>


      <Box px={40} pb={20} id="4">
        <Text fontFamily="Roboto" fontWeight="bold" fontSize={50}>
            YOASOBI
          </Text>
          <Text fontSize="2xl" fontFamily="Rajdhani">
          　コンポーザーのAyase、ボーカルのikuraからなる、「小説を音楽にするユニット」 。2019年11月に公開された第一弾楽曲「夜に駆ける」はBillboard Japan 総合ソングチャート"HOT100"にて2020年年間1位を獲得し、2021年12月に史上初のストリーミング累計7億回再生を突破。
          </Text>
        </Box>

        <Box Align="center" >
        <Grid
          templateColumns='repeat(2, 1fr)'
        gap={20}
        display="flex"
        alignItems="center"
        justifyContent="center">
    <Box boxShadow='dark-lg'>
    <iframe width="448" height="252" src="https://www.youtube.com/embed/mnta9Pp2LqA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <Text p={2} fontFamily="Roboto" fontWeight="bold" fontSize={20}>
            "ラブレター"
          </Text>
          <Text p={2} Align="left" fontFamily="Roboto" fontWeight="bold" fontSize={18}>
            いつまでも大好きなあなたが響いていますように...
          </Text>
    </Box>
    <Box boxShadow='dark-lg'>
    <iframe width="448" height="252" src="https://www.youtube.com/embed/I0kytvnHG-Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <Text p={2} fontFamily="Roboto" fontWeight="bold" fontSize={20}>
            "もしも命が描けたら"
          </Text>
          <Text p={2} Align="left" fontFamily="Roboto" fontWeight="bold" fontSize={18}>
            僕の残りの時間と引き換えに...
          </Text>
    </Box>
      </Grid>
      </Box>

      <Box  h={100}>
      </Box>
      <Divider borderColor="#FFFFFF" w={1000} mx={100}/>

      <Box id="concept" textAlign="center" mt={100}>
          <Text fontFamily="Roboto" fontWeight="bold" fontSize={72}>
            galaxy
          </Text>
        </Box>

        <Box  h={30}>
      </Box>

        <Grid
        templateColumns="repeat(3, 1fr)"
        gap={50}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        </Grid>



    </Box>

  );
};
