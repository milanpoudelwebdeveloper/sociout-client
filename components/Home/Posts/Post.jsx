import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Link from "next/link";
import Comments from "../Comments/Comments";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const bg = useColorModeValue("light.bg", "dark.bg");
  const text = useColorModeValue("light.text", "dark.text");

  const liked = false;
  return (
    <Box
      p={5}
      bg={bg}
      boxShadow="0px 0px 25px -10px rgba(0, 0, 0, 0.38)"
      borderRadius={20}
      color={text}
    >
      <Flex justifyContent="space-between">
        <Flex gap={5}>
          <Link href={`/profile/${post?.userId}`}>
            <Image
              src={post.profilePic}
              w={10}
              h={10}
              rounded="full"
              objectFit="cover"
            />
          </Link>
          <Flex direction="column" justify="start">
            <Text>{post?.name}</Text>
            <Text>a minute ago</Text>
          </Flex>
        </Flex>
        <MoreHorizIcon />
      </Flex>
      <Box my={5}>
        <Text>{post?.desc}</Text>
        {post?.image && (
          <Image
            src={post?.image}
            w="full"
            maxH={300}
            objectFit="cover"
            mt={5}
          />
        )}
      </Box>
      <Box>
        <Flex alignItems="center" gap={5}>
          <Flex alignItems="center" gap={3} cursor="pointer" fontSize="sm">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            <Text>12 Likes</Text>
          </Flex>
          <Flex
            alignItems="center"
            gap={3}
            cursor="pointer"
            fontSize="sm"
            onClick={() => setCommentOpen((prev) => !prev)}
          >
            <TextsmsOutlinedIcon />
            <Text>12 comments</Text>
          </Flex>
          <Flex alignItems="center" gap={3} cursor="pointer" fontSize="sm">
            <ShareOutlinedIcon />
          </Flex>
        </Flex>
      </Box>
      {commentOpen && <Comments />}
    </Box>
  );
};

export default Post;
