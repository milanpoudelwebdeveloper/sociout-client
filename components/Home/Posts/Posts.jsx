import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Post from "./Post";
import { useQuery } from "react-query";
import { axiosInstance } from "../../../axiosConfig";

const Posts = () => {
  const { data, error, isSuccess } = useQuery("posts", () =>
    axiosInstance.get("/posts").then((res) => res?.data?.posts)
  );

  return (
    <Flex direction="column" gap={12}>
      {data?.map((post) => (
        <Post key={post?.id} post={post} />
      ))}
    </Flex>
  );
};

export default Posts;
