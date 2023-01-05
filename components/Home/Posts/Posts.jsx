import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Post from "./Post";
import { useQuery } from "react-query";
import { axiosInstance } from "../../../axiosConfig";

const Posts = () => {
  const { data, isLoading } = useQuery(
    "posts",
    () => axiosInstance.get("/posts").then((res) => res?.data?.posts),
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <Flex direction="column" gap={12}>
      {isLoading && <Box>Loading...</Box>}
      {data?.map((post) => (
        <Post key={post?.id} post={post} />
      ))}
    </Flex>
  );
};

export default Posts;
