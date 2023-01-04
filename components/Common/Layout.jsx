import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import LeftBar from "../LeftBar/LeftBar";
import NavBar from "../NavBar/NavBar";
import RightBar from "../RightBar/RightBar";

const Layout = ({ children }) => {
  const bg = useColorModeValue("light.bgSoft", "dark.bgSoft");
  return (
    <Box>
      <NavBar />
      <Flex>
        <LeftBar />
        <Box flex={6} bg={bg} py={5} px={18}>
          {children}
        </Box>
        <RightBar />
      </Flex>
    </Box>
  );
};

export default Layout;
