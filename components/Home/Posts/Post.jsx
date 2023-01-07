import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Link from "next/link";
import Comments from "../Comments/Comments";
import moment from "moment";
import { axiosInstance } from "../../../axiosConfig";
import { useCustomToast } from "../../../customHooks/useToast";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [liked, setLiked] = useState(post?.liked);
  const bg = useColorModeValue("light.bg", "dark.bg");
  const text = useColorModeValue("light.text", "dark.text");
  const { showToast } = useCustomToast();

  const fallBackSrc =
    "https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?w=2000";

  const likeHandler = async () => {
    if (!liked) {
      try {
        const response = await axiosInstance.post("/likes?postId=" + post?.id);
        setLiked(response.data.liked);
      } catch (e) {
        console.log(e);
        showToast("Error while liking post", "Error", "error");
      }
    } else {
      try {
        const response = await axiosInstance.delete(
          "/likes?postId=" + post?.id
        );
        setLiked(response.data.liked);
      } catch (e) {
        console.log(e);
        showToast("Error while unliking post", "Error", "error");
      }
    }
  };

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
          <Link href={`/profile/${post?.userid}`}>
            <Image
              src={post?.profilepic}
              fallbackSrc={fallBackSrc}
              w={10}
              h={10}
              rounded="full"
              objectFit="cover"
            />
          </Link>
          <Flex direction="column" justify="start">
            <Text>{post?.name}</Text>
            <Text>{moment(post?.createdat).fromNow()}</Text>
          </Flex>
        </Flex>
        <MoreHorizIcon />
      </Flex>
      <Box my={5}>
        <Text>{post?.descp}</Text>
        {post?.img && (
          <Image src={post?.img} w="full" maxH={300} objectFit="cover" mt={5} />
        )}
      </Box>
      <Box>
        <Flex alignItems="center" gap={5}>
          <Flex alignItems="center" gap={3} cursor="pointer" fontSize="sm">
            <Box onClick={likeHandler}>
              {liked ? (
                <FavoriteOutlinedIcon color="red" />
              ) : (
                <FavoriteBorderOutlinedIcon />
              )}
            </Box>
            <Text>{post?.likescount || 0}</Text>
          </Flex>
          <Flex
            alignItems="center"
            gap={3}
            cursor="pointer"
            fontSize="sm"
            onClick={() => setCommentOpen(true)}
          >
            <TextsmsOutlinedIcon />
            <Text>{post?.commentscount}</Text>
          </Flex>
          <Flex alignItems="center" gap={3} cursor="pointer" fontSize="sm">
            <ShareOutlinedIcon />
          </Flex>
        </Flex>
      </Box>
      {commentOpen && <Comments postId={post?.id} />}
    </Box>
  );
};

export default Post;
