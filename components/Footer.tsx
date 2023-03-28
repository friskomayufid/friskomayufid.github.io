import React from "react";
import Link from "next/link";
import { Box, Container, Text, Flex, Center } from "@chakra-ui/react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebookSquare,
  FaRegCopyright,
} from "react-icons/fa";

type Props = {};

function Footer({}: Props) {
  return (
    <Box>
      <Container maxW={"6xl"} py={{ base: "4", lg: "5" }}>
        <hr></hr>
        <Text align={"center"} mt="3">
          Reach me out
        </Text>
        <Center>
          <Flex gap={4} mt="3">
            <Link href="https://github.com/friskomayufid">
              <a>
                <FaGithub size={24} />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/friskomayufid/">
              <a>
                <FaLinkedin size={24} />
              </a>
            </Link>
            <Link href="https://www.instagram.com/myxxfd/">
              <a>
                <FaInstagram size={24} />
              </a>
            </Link>
            <Link href="https://www.facebook.com/Friskomayufid/">
              <a>
                <FaFacebookSquare size={24} />
              </a>
            </Link>
          </Flex>
        </Center>
        <Center>
          <Flex mt={3}>
            <FaRegCopyright
              size={16}
              style={{ marginTop: "3", marginRight: "5" }}
            />
            <Text>{new Date().getFullYear()} Frisko Mayufid</Text>
          </Flex>
        </Center>
      </Container>
    </Box>
  );
}

export default Footer;
