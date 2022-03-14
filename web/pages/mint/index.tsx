import type { NextPage } from "next";

import { Box, Text, Button, Badge } from "@chakra-ui/react";

import { Header } from "../../components";
import { useWeb3 } from "@3rdweb/hooks";

const MintPage: NextPage = () => {
  const { address, chainId, connectWallet, disconnectWallet, error } =
    useWeb3();

  return (
    <>
      <Box
        h="100vh"
        w="100vw"
        overflowX="hidden"
        bgImage="https://res.cloudinary.com/didkcszrq/image/upload/v1647222804/background_gradient_mwbieb.svg"
        backgroundSize="cover"
      >
        <Header onHomepage={false} />

        <Box
          display="flex"
          flexDir="column"
          textAlign="center"
          justifyContent="center"
          fontFamily="syncopate"
          fontWeight="700"
          fontSize="5xl"
          textColor="gray.700"
          mt="16"
        >
          <Text>cliam your early access NFT</Text>

          {address ? (
            <Text
              fontFamily="sen"
              fontWeight="400"
              textColor="gray.600"
              fontSize="xl"
            >
              wallet connected! claim your early access NFT
            </Text>
          ) : (
            <Text
              fontFamily="sen"
              fontWeight="400"
              textColor="gray.600"
              fontSize="xl"
            >
              please connect your wallet to continue
            </Text>
          )}

          {address && (
            <Box fontFamily="sen">
              <Badge
                px="4"
                py="1"
                rounded="full"
                fontSize="md"
                colorScheme="green"
              >
                {address}
              </Badge>
            </Box>
          )}

          <Box fontFamily="sen">
            {address ? (
              <>
                <Button colorScheme="messenger">claim NFT</Button>
              </>
            ) : (
              <Button onClick={() => connectWallet("injected")} colorScheme="messenger">
                connect wallet
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MintPage;
