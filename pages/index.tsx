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
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { ColorModeSwitcher } from "../components/ColorModeSwitcher";

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
        <Box as="section" pb={{ base: "12", md: "24" }}>
          <Box as="nav" bg="bg-surface" boxShadow="sm">
            <Container maxW={"2xl"} py={{ base: "4", lg: "5" }}>
              <HStack spacing="10" justify="space-between">
                {/* <Logo /> */}
                {isDesktop ? (
                  <Flex justify="space-between" flex="1">
                    <ButtonGroup variant="link" spacing="8">
                      {["Tentang", "Portofolio", "Blog"].map((item) => (
                        <Button key={item}>{item}</Button>
                      ))}
                    </ButtonGroup>
                    <HStack spacing="3">
                      <ColorModeSwitcher />
                      {/* <Button variant="ghost">Sign in</Button>
                      <Button variant="primary">Sign up</Button> */}
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
        </Box>
      </main>
    </>
  );
}
