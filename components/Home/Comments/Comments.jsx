import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import moment from "moment";
import React, { useContext } from "react";
import { useQuery } from "react-query";
import { axiosInstance } from "../../../axiosConfig";
import { AuthContext } from "../../context/authContext";

const Comments = ({ postId }) => {
  const bg = useColorModeValue("light.bg", "dark.bg");
  const text = useColorModeValue("light.text", "dark.text");
  const border = useColorModeValue("light.border", "dark.border");
  const { user } = useContext(AuthContext);

  const { data, isLoading, error } = useQuery("comments", () =>
    axiosInstance
      .get("/comments?postId=" + postId)
      .then((res) => res?.data?.comments)
  );

  const fallBackSrc =
    "https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?w=2000";

  console.log("comment is", data);
  return (
    <Box bg={bg} color={text}>
      <Flex my={5} gap={5}>
        <Image
          src={user?.profilepic}
          fallbackSrc={fallBackSrc}
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
      {data?.map((comment) => (
        <Flex my={8} gap={5} key={comment?.id}>
          <Image
            src={comment?.profilePic}
            w={10}
            h={10}
            rounded="full"
            objectFit="cover"
          />

          <Flex direction="column" flex={5} gap={1}>
            <Text fontWeight="medium">{comment?.name}</Text>
            <Text>{comment?.descp}</Text>
          </Flex>
          <Text flex={1} alignSelf="center" color="gray" fontSize="sm">
            {moment(comment?.createdAt).fromNow()}
          </Text>
        </Flex>
      ))}
    </Box>
  );
};

export default Comments;
