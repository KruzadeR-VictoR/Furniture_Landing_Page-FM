import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import left from "../public/icon-angle-left.svg";
import right from "../public/icon-angle-right.svg";

function Home() {
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
        templateColumns="repeat(5,1fr)"
        templateRows="repeat(3,1fr)"
        maxW="80rem"
        maxH="95vh"
        // border="1px solid #ccc"
        // boxShadow='3xl'
      >
        <GridItem colSpan={5} rowSpan={2} position="relative">
          <Flex w="full" h="full">
            <Box flexBasis="55%">
              <Image
                w="full"
                h="full"
                src="/desktop-image-hero-1.jpg"
                objectFit="cover"
                objectPosition="center"
                // bg="teal"
              />
            </Box>
            <VStack
              flexBasis="45%"
              pt="5rem"
              px="5rem"
              spacing={5}
              bg="white"
              alignItems="start"
            >
              <Heading
                as="h1"
                fontSize="3xl"
                fontWeight="extraBold"
                color="veryDarkgray"
              >
                Discover innovative <br /> ways to decorate
              </Heading>
              <Text
                color="DarkGray"
                fontSize="md"
                fontWeight="normal"
                maxW="25rem"
              >
                We provide unmatched quality, comfort, and style for property
                owners across the country. Our experts combine form and function
                in bringing your vision to life. Create a room in your own style
                with our collection and make your property a reflection of you
                and what you love.
              </Text>
              <HStack
                as="button"
                variant="link"
                color="verydarkgray"
                bg="transparent"
                fontWeight="bold"
                letterSpacing="10px"
                sx={{ textDecoration: "none" }}
                alignItems="center"
                // _hover={{
                //     color:' DarkGray'
                // }}
              >
                <Text> SHOP NOW</Text>
                <Image src="../public/icon-arrow.svg" ml="3" />
              </HStack>
            </VStack>
          </Flex>
          {/* Slider Control Buttons  */}
          <ButtonGroup
            isAttached
            size="lg"
            position="absolute"
            bottom="0"
            left="61%"
            transform="translate(-54%)"
            h="4.5rem"
            bg="teal"
            // aspectRatio="square"
            // sx={{ aspectRatio: "1" }}
          >
            <Button
              h="full"
              sx={{ aspectRatio: "1" }}
              bg="Black"
              rounded="none"
              _hover={{ background: "VeryDarkGray" }}
            >
              <Image src={left} />
            </Button>
            <Button
              h="full"
              sx={{ aspectRatio: "1" }}
              bg="Black"
              rounded="none"
              _hover={{ background: "VeryDarkGray" }}
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
        <GridItem colSpan={1} w="23rem">
          <Image
            h="full"
            src="../public/image-about-dark.jpg"
            objectFit="cover"
            objectPosition="center"
          />
        </GridItem>
        <GridItem colSpan={3} bg="white" py="10" p="12">
          <Heading fontSize="md" fontWeight="extraBold" letterSpacing="8px">
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
        <GridItem colSpan={1} w="23rem">
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
