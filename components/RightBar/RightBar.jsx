import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import LatestActivities from "./LatestActivities";
import OnlineFriends from "./OnlineFriends";
import Suggestions from "./Suggestions";

const RightBar = () => {
  const bg = useColorModeValue("light.bgSoft", "dark.bgSoft");
  const boxBg = useColorModeValue("light.bg", "dark.bg");
  const textColor = useColorModeValue("light.textSoft", "dark.textSoft");
  return (
    <Flex
      direction="column"
      gap={5}
      flex={3}
      bg={bg}
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
      <Box p={5} boxShadow="0px 0px 15px 1px rgba(0, 0, 0, 0.09)" bg={boxBg}>
        <Text color={textColor}>Suggestions for you</Text>
        <Suggestions />
      </Box>
      <Box p={5} boxShadow="0px 0px 15px 1px rgba(0, 0, 0, 0.09)" bg={boxBg}>
        <Text color={textColor}>Latest Activities</Text>
        <LatestActivities />
      </Box>
      <Box p={5} boxShadow="0px 0px 15px 1px rgba(0, 0, 0, 0.09)" bg={boxBg}>
        <Text color={textColor}>Online Friends</Text>
        <OnlineFriends />
      </Box>
    </Flex>
  );
};

export default RightBar;
