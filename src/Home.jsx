import {
  Box,
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Hide,
  Icon,
  Image,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import left from "./assets/icon-angle-left.svg";
import right from "./assets/icon-angle-right.svg";
import hamburgerIcon from "./assets/icon-hamburger.svg";
import darkImg from "./assets/image-about-dark.jpg";
import lightImg from "./assets/image-about-light.jpg";
import { Products } from "./Components/Products";
import closeBtn from "./assets/icon-close.svg";

// framer motion
import { motion } from "framer-motion";

function Home() {
  const beforeStyles = {
    content: '""',
    width: "50%",
    height: "2px",
    background: "White",
    position: "absolute",
    bottom: "-2",
    left: "50%",
    translate: "-50% 0",
    transition: "all .5s easeIn",
    display: "none",
  };
  const [current, setcurrent] = useState(0);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  useEffect(() => {
    // console.log(current);
  }, [current]);

  // Animations

  const Card = {
    hidden: {
      opacity: 0,
      scale: 0,
      // x: -100,
    },
    visible: {
      opacity: 1,
      scale: 1,
      // x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        type: "spring",
        delay: 0.1,
        duration: 1,
      },
    },
  };

  const parentVariant = {
    hidden: {
      y: 0,
      // scale: 0,
    },
    visible: {
      y: 0,
      // scale: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        type: "tween",
        // delay: 0.5,
        duration: 0.2,
      },
    },
  };
  const imageVar = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", duration: 0.5 },
    },
  };

  const childVariant = {
    hidden: {
      opacity: 0,
      // scale: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      // scale: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.5,
        // delay: 1.1,
      },
    },
  };

  const item = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "tween" },
    },
  };

  return (
    <Grid bg="DarkGray" minH="100vh" w="100%" placeContent="center">
      <Grid
        as={motion.div}
        templateColumns={[1, 1, "repeat(5,1fr)"]}
        // templateRows="repeat(3,1fr)"
        maxW={["100%", "80rem"]}
        maxH={["100vh", "95vh"]}
        overflow={["auto", "hidden"]}
        variants={Card}
        initial="hidden"
        animate="visible"
        // boxShadow='3xl'
      >
        <GridItem colSpan={5} rowSpan={2} position="relative">
          {/* Navbar            */}
          <Flex
            as="nav"
            alignItems="center"
            gap="16"
            position="absolute"
            top={[12, 12]}
            left={[0, 0, 10]}
            w={["full", "full", "auto"]}
            // bg="red"
            px="6"
            py="1"
            justifyContent={["center", "center", "left"]}
          >
            {/* <Flex> */}
            <Hide above="md">
              <Box
                as="button"
                ref={btnRef}
                onClick={onOpen}
                position="absolute"
                left="6"
              >
                <Image src={hamburgerIcon} alt="logo" />
              </Box>
              <Drawer
                placement="top"
                isOpen={isOpen}
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent h="8rem">
                  <DrawerBody bg="White" py="3" px="6">
                    <Flex
                      direction="row"
                      align="center"
                      justify="space-between"
                      h="full"
                      w="full"
                      // bg="pink"
                    >
                      <Box onClick={onClose}>
                        <Image src={closeBtn} />
                      </Box>
                      <Flex alignItems="right" gap="8">
                        <Text
                          as="a"
                          href="#"
                          sx={{
                            textDecoration: "none",
                            fontWeight: "extraBold",
                          }}
                          color="Black"
                          position="relative"
                          _before={beforeStyles}
                          _hover={{ _before: { display: "block" } }}
                        >
                          home
                        </Text>
                        <Text
                          as="a"
                          href="#"
                          sx={{
                            textDecoration: "none",
                            fontWeight: "extraBold",
                          }}
                          color="Black"
                          position="relative"
                          _before={beforeStyles}
                          _hover={{ _before: { display: "block" } }}
                        >
                          shop
                        </Text>
                        <Text
                          as="a"
                          href="#"
                          sx={{
                            textDecoration: "none",
                            fontWeight: "extraBold",
                          }}
                          color="Black"
                          position="relative"
                          _before={beforeStyles}
                          _hover={{ _before: { display: "block" } }}
                        >
                          about
                        </Text>
                        <Text
                          as="a"
                          href="#"
                          sx={{
                            textDecoration: "none",
                            fontWeight: "extraBold",
                          }}
                          color="Black"
                          position="relative"
                          _before={beforeStyles}
                          _hover={{ _before: { display: "block" } }}
                        >
                          contact
                        </Text>
                      </Flex>
                    </Flex>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Hide>

            <Box as="button" aria-label="Brand_Logo">
              <Image src="/logo.svg" alt="logo" w="full" h="full" />
            </Box>
            <Hide below="md">
              <Flex alignItems="center" gap="8">
                <Text
                  as="a"
                  href="#"
                  sx={{ textDecoration: "none" }}
                  color="White"
                  position="relative"
                  _before={beforeStyles}
                  _hover={{ _before: { display: "block" } }}
                >
                  home
                </Text>
                <Text
                  as="a"
                  href="#"
                  sx={{ textDecoration: "none" }}
                  color="White"
                  position="relative"
                  _before={beforeStyles}
                  _hover={{ _before: { display: "block" } }}
                >
                  shop
                </Text>
                <Text
                  as="a"
                  href="#"
                  sx={{ textDecoration: "none" }}
                  color="White"
                  position="relative"
                  _before={beforeStyles}
                  _hover={{ _before: { display: "block" } }}
                >
                  about
                </Text>
                <Text
                  as="a"
                  href="#"
                  sx={{ textDecoration: "none" }}
                  color="White"
                  position="relative"
                  _before={beforeStyles}
                  _hover={{ _before: { display: "block" } }}
                >
                  contact
                </Text>
              </Flex>
            </Hide>
          </Flex>
          {/* </Flex> */}

          {/* Content  */}
          <Flex w="full" h="full">
            {Products &&
              Products.map((product, index) => {
                if (index == current) {
                  return (
                    <Flex
                      key={product.id}
                      direction={["column", "column", "row"]}
                      // bg="red"
                      flex="1"
                    >
                      <Box flexBasis="55%">
                        <Hide below="md">
                          <Image
                            as={motion.img}
                            variants={imageVar}
                            initial="hidden"
                            animate="visible"
                            // w="full"
                            w="45rem"
                            // h="full"
                            h="30rem"
                            src={product.desktopImg}
                            objectFit="cover"
                            objectPosition="center"
                            alt="carousel image"
                          />
                        </Hide>
                        <Hide above="md">
                          <Image
                            w="full"
                            h="full"
                            src={product.mobileImg}
                            objectFit="cover"
                            objectPosition="center"
                            alt="carousel image"
                          />
                        </Hide>
                      </Box>
                      <VStack
                        as={motion.div}
                        flexBasis="45%"
                        pt={{ base: "3rem", md: "5rem" }}
                        px={{ base: "2rem", md: "5rem" }}
                        pb={["3rem", 0]}
                        spacing={5}
                        bg="White"
                        alignItems="start"
                        variants={parentVariant}
                        initial="hidden"
                        animate="visible"
                      >
                        <Heading
                          as={motion.h1}
                          variants={childVariant}
                          // initial="hidden"
                          // animate="visible"
                          fontSize={["2rem", "2.3rem"]}
                          fontWeight="extraBold"
                          color="veryDarkgray"
                        >
                          {product.heading}
                        </Heading>
                        <Text
                          as={motion.p}
                          color="DarkGray"
                          fontSize="md"
                          fontWeight="normal"
                          maxW="25rem"
                          variants={childVariant}
                          // initial="hidden"
                          // animate="visible"
                        >
                          {product.text}
                        </Text>
                        <HStack
                          as={motion.button}
                          variants={childVariant}
                          // initial="hidden"
                          // animate="visible"
                          variant="link"
                          color="verydarkgray"
                          bg="transparent"
                          fontWeight="bold"
                          letterSpacing="10px"
                          alignItems="center"
                          spacing="5"
                          sx={{ textDecoration: "none" }}
                          _hover={{
                            color: " DarkGray",
                            path: { fill: "DarkGray" },
                          }}
                        >
                          <Text> SHOP NOW</Text>
                          <Icon
                            viewBox="0 0 40 12"
                            w="60px"
                            color="Black"
                            // _hover={{ path: { fill: "red" } }}
                          >
                            <path
                              fill="Black"
                              d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                            />
                          </Icon>
                        </HStack>
                      </VStack>
                    </Flex>
                  );
                }
              })}
          </Flex>

          {/* Slider Control Buttons  */}
          <ButtonGroup
            isAttached
            size="lg"
            position="absolute"
            bottom="0"
            top={["47%", "auto"]}
            right={["0", "auto"]}
            left={["auto", "61%"]}
            transform={["translate(0,-60%)", "translate(-54%)"]}
            h="4.5rem"
          >
            <Button
              h="full"
              isDisabled={current <= 0}
              _disabled={{
                background: "DarkGray",
              }}
              sx={{ aspectRatio: "1" }}
              bg="Black"
              rounded="none"
              aria-label="carousel_ctrl_left"
              _hover={{ background: "VeryDarkGray" }}
              onClick={() => setcurrent(current - 1)}
            >
              <Image src={left} alt="carousel left button" w="2em" h="2em" />
            </Button>
            <Button
              isDisabled={current >= 2}
              _disabled={{
                background: "DarkGray",
              }}
              h="full"
              sx={{ aspectRatio: "1" }}
              bg="Black"
              rounded="none"
              aria-label="carousel_ctrl_right"
              _hover={{ background: "VeryDarkGray" }}
              onClick={() => setcurrent(current + 1)}
            >
              <Image src={right} alt="carousel right button" w="2em" h="2em" />
            </Button>
          </ButtonGroup>
        </GridItem>
        <GridItem
          as={motion.div}
          colSpan={{ base: "5", md: "1" }}
          w={{ base: "auto", md: "23rem" }}
          variants={item}
        >
          <Image
            w="full"
            h="full"
            src={darkImg}
            objectFit="cover"
            objectPosition="center"
            alt="dark image"
          />
        </GridItem>
        <GridItem
          as={motion.div}
          colSpan={{ base: "5", md: "3" }}
          bg="White"
          py="12"
          px={[8, 12]}
          variants={item}
        >
          <Heading
            fontSize={["sm", "md"]}
            fontWeight="extraBold"
            letterSpacing="8px"
          >
            ABOUT OUR FURNITURE
          </Heading>
          <Text mt="4" color="DarkGray" fontWeight="normal">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </Text>
        </GridItem>
        <GridItem
          as={motion.div}
          colSpan={{ base: "5", md: "1" }}
          w={{ base: "auto", md: "23rem" }}
          variants={item}
        >
          <Image
            w="full"
            h="full"
            src={lightImg}
            objectFit="cover"
            objectPosition="center"
            alt="light image"
          />
        </GridItem>
      </Grid>
    </Grid>
  );
}

export default Home;
