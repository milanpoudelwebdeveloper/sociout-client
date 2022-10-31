import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Post from "./Post";

const Posts = () => {
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
    <Flex direction="column" gap={12}>
      {dummyData.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Flex>
  );
};

export default Posts;
