import {
  Box,
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Hide,
  Icon,
  IconButton,
  Image,
  Link,
  Show,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import left from "../public/icon-angle-left.svg";
import right from "../public/icon-angle-right.svg";
import { Products } from "./Components/Products";
import closeBtn from "./assets/icon-close.svg";

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
  // Slider Config

  useEffect(() => {
    // console.log(current);
  }, [current]);

  return (
    <Grid bg="DarkGray" minH="100vh" w="100%" placeContent="center">
      {/* <Flex direction="column" maxW="50rem" border="1px solid #ccc">
        <Flex>
          <Box flexBas="50%">
            <Image
              w="full"
              h="full"
              src="/desktop-image-hero-1.jpg"
              objectFit="contain"
              bg="teal"
            />
          </Box>
          <VStack flexBasis="40%" bg="red">
            <Heading>Discover innovative ways to decorate</Heading>
            <Text>
              We provide unmatched quality, comfort, and style for property
              owners across the country. Our experts combine form and function
              in bringing your vision to life. Create a room in your own style
              with our collection and make your property a reflection of you and
              what you love.
            </Text>
          </VStack>
        </Flex>
        <Flex>
          <Box colSpan={2}>
            <Image src="../public/image-about-dark.jpg" />
          </Box>
          <Box colSpan={2}>
            <Heading>About our furniture</Heading>
            <Text>
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </Text>
          </Box>
          <Box colSpan={2}>
            <Image src="../public/image-about-light.jpg" />
          </Box>
        </Flex>
      </Flex> */}
      <Grid
        templateColumns={{ base: "1", md: "repeat(5,1fr)" }}
        // templateRows="repeat(3,1fr)"
        maxW={["100%", "80rem"]}
        maxH={["100vh", "95vh"]}
        // border="1px solid #ccc"
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
            left={[0,0, 10]}
            w={["full",'full', "auto"]}
            // bg="red"
            px="6"
            py='1'            
            justifyContent={["center","center", "left"]}
          >
            {/* <Flex> */}
              <Hide above="md">
                <Box as="button" ref={btnRef} onClick={onOpen} position='absolute' left="6" >
                  <Image src="../public/icon-hamburger.svg" />
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

              <Box as="button">
                <Image src="/logo.svg" />
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
            {Products.map((product, index) => {
              if (index == current) {
                return (
                  <Flex
                    key={product.id}
                    direction={{ base: "column", md: "row" }}
                  >
                    <Box flexBasis="55%">
                      <Hide below="md">
                        <Image
                          w="full"
                          h="full"
                          // src="/desktop-image-hero-1.jpg"
                          src={product.desktopImg}
                          // src={{base:`${product.desktopImg}`,md:`${product.desktopImg}`}}
                          objectFit="cover"
                          objectPosition="center"
                          // bg="teal"
                        />
                      </Hide>
                      <Hide above="md">
                        <Image
                          w="full"
                          h="full"
                          // src="/desktop-image-hero-1.jpg"
                          src={product.mobileImg}
                          // src={{base:`${product.desktopImg}`,md:`${product.desktopImg}`}}
                          objectFit="cover"
                          objectPosition="center"
                          // bg="teal"
                        />
                      </Hide>
                    </Box>
                    <VStack
                      flexBasis="45%"
                      pt={{ base: "3rem", md: "5rem" }}
                      px={{ base: "2rem", md: "5rem" }}
                      pb={["3rem", 0]}
                      spacing={5}
                      bg="white"
                      alignItems="start"
                    >
                      <Heading
                        as="h1"
                        fontSize={["2rem", "2.3rem"]}
                        fontWeight="extraBold"
                        color="veryDarkgray"
                      >
                        {product.heading}
                      </Heading>
                      <Text
                        color="DarkGray"
                        fontSize="md"
                        fontWeight="normal"
                        maxW="25rem"
                      >
                        {product.text}
                      </Text>
                      <HStack
                        as="button"
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
            // bg="teal"
            // aspectRatio="square"
            // sx={{ aspectRatio: "1" }}
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
              _hover={{ background: "VeryDarkGray" }}
              onClick={() => setcurrent(current - 1)}
            >
              <Image src={left} />
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
              _hover={{ background: "VeryDarkGray" }}
              onClick={() => setcurrent(current + 1)}
            >
              <Image src={right} />
            </Button>
            {/* <IconButton bg='red' aria-label="previous slide" icon={left} /> */}
          </ButtonGroup>
        </GridItem>
        {/* <GridItem colSpan={1} p="5" bg="teal">
          <Heading>Discover innovative ways to decorate</Heading>
          <Text>
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </Text>
        </GridItem> */}
        <GridItem
          colSpan={{ base: "5", md: "1" }}
          w={{ base: "auto", md: "23rem" }}
        >
          <Image
            h="full"
            src="../public/image-about-dark.jpg"
            objectFit="cover"
            objectPosition="center"
          />
        </GridItem>
        <GridItem
          colSpan={{ base: "5", md: "3" }}
          bg="white"
          py="12"
          px={[8, 12]}
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
          colSpan={{ base: "5", md: "1" }}
          w={{ base: "auto", md: "23rem" }}
        >
          <Image
            h="full"
            src="../public/image-about-light.jpg"
            objectFit="cover"
            objectPosition="center"
          />
        </GridItem>
      </Grid>
    </Grid>
  );
}

export default Home;
