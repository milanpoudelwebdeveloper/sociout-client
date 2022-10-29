import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import LeftBar from "../LeftBar/LeftBar";
import NavBar from "../NavBar/NavBar";
import RightBar from "../RightBar/RightBar";

const Layout = ({ children }) => {
  return (
    <Box>
      <NavBar />
      <Flex>
        <LeftBar />
        <Box flex={6}>{children}</Box>
        <RightBar />
      </Flex>
    </Box>
  );
};

export default Layout;
