import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const Comments = () => {
  const bg = useColorModeValue("light.bg", "dark.bg");
  const text = useColorModeValue("light.text", "dark.text");
  const border = useColorModeValue("light.border", "dark.border");
  const dummyData = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic: "https://picsum.photos/200",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ex.",
    },
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic: "https://picsum.photos/200",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ex.",
      image: "https://picsum.photos/200",
    },
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic: "https://picsum.photos/200",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ex.",
      image: "https://picsum.photos/200",
    },
  ];
  return (
    <Box bg={bg} color={text}>
      <Flex my={5} gap={5}>
        <Image
          src={dummyData[0].profilePic}
          alt="profile pic"
          w={10}
          h={10}
          rounded="full"
          objectFit="cover"
        />
        <Input
          placeholder="Write a comment..."
          px={3}
          borderWidth={1}
          borderColor={border}
          bg="transparent"
          _focus={{ outline: "none", shadow: "none" }}
          _active={{ outline: "none", shadow: "none" }}
        />
        <Button
          bg="brand.100"
          p={3}
          w="10%"
          border="none"
          borderRadius={5}
          color="white"
        >
          Post
        </Button>
      </Flex>
      {dummyData.map((comment) => (
        <Flex my={8} gap={5}>
          <Image
            src={comment.profilePic}
            w={10}
            h={10}
            rounded="full"
            objectFit="cover"
          />

          <Flex direction="column" flex={5} gap={1}>
            <Text fontWeight="medium">{comment?.name}</Text>
            <Text>{comment?.desc}</Text>
          </Flex>
          <Text flex={1} alignSelf="center" color="gray" fontSize="sm">
            1 hour ago
          </Text>
        </Flex>
      ))}
    </Box>
  );
};

export default Comments;
