import Link from "next/link";
import moment from "moment";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

interface BlogList {
  list: Array<String>;
}

function BlogList({ list }: BlogList) {
  return (
    <Box>
      <Container maxW={"6xl"} py={{ base: "4", lg: "5" }}>
        <Text fontSize={"4xl"} fontWeight="bold">
          Featured Posts
        </Text>
        <Flex mt="10" gap={"10"} flexWrap="wrap" paddingLeft={0}>
          {list.map(({ id, date, title, description, thumbnail }: any) => (
            <Box key={id} flexBasis={{ base: "100%", md: "50%", lg: "30%" }}>
              <Link href={`/blog/${id}`} key={id}>
                <a>
                  <Box>
                    <Image
                      src={thumbnail}
                      width="350"
                      height="250"
                      objectFit="cover"
                      alt={title}
                    ></Image>
                    <Text mt="3">
                      {moment(date).format("DD MMMM YYYY")} - 2 Min Read
                    </Text>
                    <Text
                      mt="3"
                      fontWeight="bold"
                      fontSize="2xl"
                      lineHeight="1.2"
                    >
                      {title}
                    </Text>
                    <Text mt="3" fontSize="xl">
                      {description}
                    </Text>
                    <Text
                      mt="3"
                      fontWeight="bold"
                      fontSize="xl"
                      color={"teal.200"}
                    >
                      Read More
                    </Text>
                  </Box>
                </a>
              </Link>
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
}

export default BlogList;
