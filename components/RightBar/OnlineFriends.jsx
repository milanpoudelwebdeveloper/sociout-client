import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const OnlineFriends = () => {
  return (
    <Flex direction="column" gap={4} mt={5}>
      <Flex alignItems="center" gap={2.5} position="relative">
        <Box
          w={3}
          h={3}
          position="absolute"
          top={0}
          left={7}
          bg="lightgreen"
          borderRadius={"50%"}
        />
        <Image
          src="https://bit.ly/sage-adebayo"
          alt="Segun Adebayo"
          w={41}
          h={41}
          borderRadius={"50%"}
          objectFit="cover"
        />
        <Text fontWeight="medium">John Doe</Text>
      </Flex>

      <Flex alignItems="center" gap={2.5} position="relative">
        <Box
          w={3}
          h={3}
          position="absolute"
          top={0}
          left={7}
          bg="lightgreen"
          borderRadius={"50%"}
        />
        <Image
          src="https://bit.ly/sage-adebayo"
          alt="Segun Adebayo"
          w={41}
          h={41}
          borderRadius={"50%"}
          objectFit="cover"
        />
        <Text fontWeight="medium">John Doe</Text>
      </Flex>

      <Flex alignItems="center" gap={2.5} position="relative">
        <Box
          w={3}
          h={3}
          position="absolute"
          top={0}
          left={7}
          bg="lightgreen"
          borderRadius={"50%"}
        />
        <Image
          src="https://bit.ly/sage-adebayo"
          alt="Segun Adebayo"
          w={41}
          h={41}
          borderRadius={"50%"}
          objectFit="cover"
        />
        <Text fontWeight="medium">John Doe</Text>
      </Flex>

      <Flex alignItems="center" gap={2.5} position="relative">
        <Box
          w={3}
          h={3}
          position="absolute"
          top={0}
          left={7}
          bg="lightgreen"
          borderRadius={"50%"}
        />
        <Image
          src="https://bit.ly/sage-adebayo"
          alt="Segun Adebayo"
          w={41}
          h={41}
          borderRadius={"50%"}
          objectFit="cover"
        />
        <Text fontWeight="medium">John Doe</Text>
      </Flex>
    </Flex>
  );
};

export default OnlineFriends;
