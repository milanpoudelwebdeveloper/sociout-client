import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Stories = () => {
  //dummy data

  const stories = [
    {
      id: 1,
      name: "John Doe",
      image: "https://thumbs.dreamstime.com/b/flowers-4929984.jpg",
    },
    {
      id: 2,
      name: "John Doe",
      image:
        "https://images.pexels.com/photos/85773/pexels-photo-85773.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "John Doe",
      image:
        "https://images.pexels.com/photos/85773/pexels-photo-85773.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "John Doe",
      image:
        "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <Flex gap={3} h={250} mb={7}>
      <Box
        key={stories[0]?.id}
        flex={1}
        borderRadius={10}
        overflow="hidden"
        position="relative"
      >
        <Image src={stories[0]?.image} w="full" h="full" objectFit="cover" />
        <Box
          position="absolute"
          left={11}
          bottom={11}
          color="white"
          fontWeight="medium"
        >
          <Button
            w={7}
            h={7}
            rounded="full"
            bg="#5371ff"
            border="none"
            fontSize="lg"
          >
            +
          </Button>
          <Text>{stories[0]?.name}</Text>
        </Box>
      </Box>
      {stories.map((story) => (
        <Box
          key={story?.id}
          flex={1}
          borderRadius={10}
          overflow="hidden"
          position="relative"
        >
          <Image src={story?.image} w="full" h="full" objectFit="cover" />
          <Box
            position="absolute"
            left={11}
            bottom={11}
            color="white"
            fontWeight="medium"
          >
            <Text>{story?.name}</Text>
          </Box>
        </Box>
      ))}
    </Flex>
  );
};

export default Stories;
