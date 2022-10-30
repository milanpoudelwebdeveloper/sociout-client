import {
  Box,
  Flex,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { leftBar, leftBarShortcuts, others } from "../../constants/leftBar";

const LeftBar = () => {
  const bg = useColorModeValue("light.bg", "dark.bg");
  return (
    <Flex
      bg={bg}
      padding={5}
      direction="column"
      gap={3}
      position="sticky"
      top={70}
      h={"calc(100vh - 70px)"}
      zIndex={100}
      overflowY="scroll"
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
      flex={2}
    >
      <Flex direction="column" gap={5} pb={5}>
        <Flex alignItems="center" gap={2.5} fontWeight="medium">
          <Image
            src="https://bit.ly/sage-adebayo"
            alt="Segun Adebayo"
            w={31}
            h={31}
            borderRadius={"50%"}
            objectFit="cover"
          />
          <Text>Span Doe</Text>
        </Flex>
        {leftBar.map(({ title, icon }) => (
          <Flex key={title} gap={3} alignItems="center">
            <Image
              src={`/images/${icon}`}
              alt={title}
              w={31}
              h={31}
              objectFit="cover"
            />
            <Text>{title}</Text>
          </Flex>
        ))}
      </Flex>

      <hr />
      <Flex direction="column" gap={3} pb={5}>
        <Text>Your Shortcuts</Text>
        {leftBarShortcuts.map(({ title, icon }) => (
          <Flex key={title} gap={3} alignItems="center">
            <Image
              src={`/images/${icon}`}
              alt={title}
              w={31}
              h={31}
              objectFit="cover"
            />
            <Text>{title}</Text>
          </Flex>
        ))}
      </Flex>
      <hr />
      <Flex direction="column" gap={2.5} pb={5}>
        <Text>Others</Text>
        {others.map(({ title, icon }) => (
          <Flex key={title} gap={3} alignItems="center">
            <Image
              src={`/images/${icon}`}
              alt={title}
              w={31}
              h={31}
              objectFit="cover"
            />
            <Text>{title}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default LeftBar;
