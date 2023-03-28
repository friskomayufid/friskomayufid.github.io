import React from "react";
import {
  Box,
  Container,
  HStack,
  Text,
  ButtonGroup,
  Button,
  Flex,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

type Props = {};

function Navbar({}: Props) {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Box as="nav" bg="bg-surface" boxShadow="sm">
      <Container maxW={"6xl"} py={{ base: "4", lg: "5" }}>
        <HStack spacing="10" justify="space-between">
          {/* <Logo /> */}
          <Link href="/">
            <a>
              <Text fontWeight="bold">Frisko Mayufid</Text>
            </a>
          </Link>
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
  );
}

export default Navbar;
