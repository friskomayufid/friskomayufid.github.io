import Head from "next/head";
import { useRef } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  keyframes,
  Text,
  Center,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { ColorModeSwitcher } from "../components/ColorModeSwitcher";
import { motion, useScroll, useSpring, useCycle } from "framer-motion";
import Image from "next/image";

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  50% { transform: scale(2) rotate(270deg); border-radius: 50%; }
  50% { transform: scale(2) rotate(360deg); border-radius: 50%; }
`;

const animationRotate = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  100% { transform: scale(1) rotate(1turn); border-radius: 20%; }
`;

const animation = `${animationKeyframes} 2s linear infinite`;
const animationR = `${animationRotate} 5s linear infinite`;

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function Home() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  // const { height } = useDimensions(containerRef);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <Head>
        <title>Frisko Mayufid - Frontend Developer</title>
        <meta name="title" content="Frisko Mayufid - Frontend Developer" />
        <meta
          name="description"
          content="I'm Frontend Developer, and I do design and build internet software.
      "
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.friskomayufid.com/" />
        <meta
          property="og:title"
          content="Frisko Mayufid - Frontend Developer"
        />
        <meta
          property="og:description"
          content="I'm Frontend Developer, and I do design and build internet software.
      "
        />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.friskomayufid.com/" />
        <meta
          property="twitter:title"
          content="Frisko Mayufid - Frontend Developer"
        />
        <meta
          property="twitter:description"
          content="I'm Frontend Developer, and I do design and build internet software.
      "
        />
        <meta property="twitter:image" content="" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box
          as={motion.div}
          style={{
            scaleX,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: "5px",
            transformOrigin: "0%",
            zIndex: 1000,
          }}
          bgGradient="linear(to-r, #00c9ff, #92fe9d)"
        />
        <Box className="section" pb={{ base: "12", md: "24" }} height="100vh">
          <Box as="nav" bg="bg-surface" boxShadow="sm">
            <Container maxW={"6xl"} py={{ base: "4", lg: "5" }}>
              <HStack spacing="10" justify="space-between">
                {/* <Logo /> */}
                <Text as="b">Frisko Mayufid</Text>
                {isDesktop ? (
                  <>
                    <Flex justify="space-between" flex="1">
                      <ButtonGroup variant="link" spacing="8">
                        {["About", "Portofolio", "Blog"].map((item) => (
                          <Button key={item}>{item}</Button>
                        ))}
                      </ButtonGroup>
                      <HStack spacing="3">
                        <Button
                          as={motion.div}
                          colorScheme={"teal"}
                          variant="outline"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          cursor={"pointer"}
                        >
                          Hire me
                        </Button>
                        <ColorModeSwitcher />
                      </HStack>
                    </Flex>
                  </>
                ) : (
                  <>
                    <IconButton
                      variant="ghost"
                      icon={<FiMenu fontSize="1.25rem" />}
                      aria-label="Open Menu"
                    />
                    {/* <motion.div
                      initial={false}
                      animate={isOpen ? "open" : "closed"}
                      custom={height}
                      ref={containerRef}
                      className="nav-mobile"
                    >
                      <motion.div className="background" variants={sidebar} />
                      <Navigation />
                      <MenuToggle toggle={() => toggleOpen()} />
                    </motion.div> */}
                  </>
                )}
              </HStack>
            </Container>
          </Box>
          <Container
            maxW={"6xl"}
            py={{ base: "4", lg: "5" }}
            pt={{ base: "20", lg: "48" }}
          >
            <Box width={{ base: "100%", md: "70%" }}>
              <Text
                fontSize={{ base: "3xl", md: "2xl", lg: "6xl" }}
                align={{ base: "left", md: "left" }}
                as="h1"
                fontWeight={"bold"}
                lineHeight="1.5"
              >
                Combine design & code into applications
              </Text>
              <Text
                fontSize={{ base: "xl", md: "2xl", lg: "2xl" }}
                as="h3"
                mt="4"
              >
                Hi, You can call me Frisko, I&apos;m Frontend Developer, and I
                do design and build internet software.
              </Text>
              <Button
                as={motion.div}
                colorScheme={"teal"}
                variant="solid"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                cursor={"pointer"}
                mt="10"
              >
                Explore More
              </Button>
            </Box>
          </Container>
        </Box>
        {/* <Box className="section" pb={{ base: "12", md: "24" }} height="100vh">
          <Container maxW={"6xl"} py={{ base: "4", lg: "5" }}>
            <Text fontSize={"6xl"}>Testing</Text>
            <Box
              as={motion.div}
              height="200px"
              width="200px"
              bg="orange.400"
              borderRadius={"full"}
              transition="0.5s linear"
            >
              <Box
                as={motion.div}
                animation={animationR}
                height="200px"
                width="200px"
                borderRadius={"full"}
              >
                <Box width={"50px"} height="50px">
                  <Image src="/assets/react.svg" width="50px" height="50px" />
                </Box>
              </Box>
            </Box>
          </Container>
        </Box> */}
        <Box className="section" pb={{ base: "12", md: "24" }} height="100vh">
          <Container maxW={"6xl"} py={{ base: "4", lg: "5" }}>
            <Flex
              flexDirection={{ base: "column", md: "row" }}
              flexDir={{ base: "column-reverse", md: "row" }}
            >
              <Box flexBasis={{ base: "100%", md: "60%" }}>
                
                <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold">
                  Nice to e-meet you!
                </Text>
                <Text fontSize={"xl"} lineHeight={"1.7"} marginTop="10">
                  Hello, My name is Frisko Mayufid. I started learning to
                  program when I’m in my final year of high school, At that time
                  I was interested in the field of game programming so I learn
                  Unity 3D.
                  <br />
                  <br />
                  After graduation, I interested in web development, so I
                  decided to learn more about web dev and focus more on the
                  Frontend side.
                  <br />
                  <br />I have 4 years of experience in building user interfaces
                  and have experience working for large companies.
                </Text>
              </Box>
              <Box flexBasis={{ base: "100%", md: "40%" }} flexShrink={0}>
                <Flex
                  alignItems={"center"}
                  justifyContent={"center"}
                  marginTop={{ base: "0", md: "20" }}
                  marginBottom={{ base: "20", md: "0" }}
                >
                  <Image
                    src="/assets/profile.svg"
                    width="300px"
                    height="300px"
                  />
                </Flex>
              </Box>
            </Flex>
          </Container>
        </Box>
      </main>
    </>
  );
}
