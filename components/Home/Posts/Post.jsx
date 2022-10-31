import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Link from "next/link";

const Post = ({ post }) => {
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
        <Flex gap={3}>
          <Link href={`/profile/${post?.userId}`}>
            <Image
              src={post.profilePic}
              w={10}
              h={10}
              rounded="full"
              objectFit="cover"
            />
          </Link>
          <Flex direction="column" alignItems="center" justify="start">
            <Text textAlign="left">{post?.name}</Text>
            <Text>a minute ago</Text>
          </Flex>
        </Flex>
        <MoreHorizIcon />
      </Flex>
      <Box>
        <Text>{post?.desc}</Text>
        {post?.image && <Image src={post?.image} w="full" h={300} />}
      </Box>
      <Box>
        <Flex>
          <Box>
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}{" "}
            12 Likes
          </Box>
          <Box>
            <TextsmsOutlinedIcon />
            12 comments
          </Box>
          <Box>
            <ShareOutlinedIcon />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Post;
