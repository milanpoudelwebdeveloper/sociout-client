import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import LatestActivities from "./LatestActivities";
import OnlineFriends from "./OnlineFriends";
import Suggestions from "./Suggestions";

const RightBar = () => {
  return (
    <Flex
      direction="column"
      gap={5}
      flex={3}
      bg="white"
      p={5}
      position="sticky"
      top={70}
      height="calc(100vh - 70px)"
      overflowY="scroll"
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Box p={5} boxShadow="0px 0px 15px 1px rgba(0, 0, 0, 0.09)">
        <Text color="gray">Suggestions for you</Text>
        <Suggestions />
      </Box>
      <Box p={5} boxShadow="0px 0px 15px 1px rgba(0, 0, 0, 0.09)">
        <Text color="gray">Latest Activities</Text>
        <LatestActivities />
      </Box>
      <Box p={5} boxShadow="0px 0px 15px 1px rgba(0, 0, 0, 0.09)">
        <Text color="gray">Online Friends</Text>
        <OnlineFriends />
      </Box>
    </Flex>
  );
};

export default RightBar;
