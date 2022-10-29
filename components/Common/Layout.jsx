import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import LeftBar from "../leftBar/leftBar";
import NavBar from "../NavBar/NavBar";
import RightBar from "../RightBar/RightBar";

const Layout = ({ children }) => {
  return (
    <Box>
      <NavBar />
      <Flex>
        <LeftBar />
        {children}
        <RightBar />
      </Flex>
    </Box>
  );
};

export default Layout;
