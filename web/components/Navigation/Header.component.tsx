import { FC } from "react";

import { Box, Text, Flex, Link } from "@chakra-ui/react";

const Header: FC = () => {
  return (
    <>
      <Box
        px={{ base: "2", sm: "4", md: "6", lg: "8", xl: "10" }}
        py="8"
        display="flex"
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flexDir="row"
          alignItems="center"
          fontFamily="jost"
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="600"
        >
          <Text>✨third</Text>
          <Text fontWeight="400">snips</Text>
        </Box>

        <Box
          fontFamily="sen"
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="700"
        >

          <Link href="https://scam.com">github.</Link>
        </Box>
      </Box>
    </>
  );
};

export default Header;