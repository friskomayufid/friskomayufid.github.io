import Head from "next/head";
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
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { ColorModeSwitcher } from "../components/ColorModeSwitcher";
import { motion } from "framer-motion";

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  50% { transform: scale(2) rotate(270deg); border-radius: 50%; }
  50% { transform: scale(2) rotate(360deg); border-radius: 50%; }
`;

const animation = `${animationKeyframes} 2s linear infinite`;

export default function Home() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <>
      <Head>
        <title>Frisko Mayufid | Frontend Developer</title>
        <meta name="description" content="I turned the design into reality" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box className="section" pb={{ base: "12", md: "24" }} height="100vh">
          <Box as="nav" bg="bg-surface" boxShadow="sm">
            <Container maxW={"6xl"} py={{ base: "4", lg: "5" }}>
              <HStack spacing="10" justify="space-between">
                {/* <Logo /> */}
                <Text as="b">Introduction</Text>
                {isDesktop ? (
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
                ) : (
                  <IconButton
                    variant="ghost"
                    icon={<FiMenu fontSize="1.25rem" />}
                    aria-label="Open Menu"
                  />
                )}
              </HStack>
            </Container>
          </Box>
          <Container maxW={"6xl"} py={{ base: "4", lg: "5" }} pt={{ lg: "48" }}>
            <Box width={"70%"}>
              <Text
                fontSize={"6xl"}
                as="h1"
                fontWeight={"bold"}
                lineHeight="1.5"
              >
                Combine design & code into applications
              </Text>
              <Text fontSize={"2xl"} as="h3" mt="4">
                Hi, You can call me Frisko, I&apos;m Frontend Developer, and I do
                design and build internet software.
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
              drag="x"
              dragConstraints={{ left: -100, right: 100}}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition="0.5s linear"
            >
            </Box>
          </Container>
        </Box> */}
      </main>
    </>
  );
}
