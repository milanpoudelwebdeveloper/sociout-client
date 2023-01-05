import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQueryClient } from "react-query";
import { axiosInstance } from "../../../axiosConfig";
import Resizer from "react-image-file-resizer";
import { useCustomToast } from "../../../customHooks/useToast";
const Share = () => {
  const [imageFile, setImageFile] = useState(null);
  const [descp, setDescp] = useState("");
  const bg = useColorModeValue("light.bg", "dark.bg");
  const text = useColorModeValue("light.text", "dark.text");
  const { user } = useContext(AuthContext);
  const { showToast } = useCustomToast();

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newPost) => axiosInstance.post("/posts", newPost),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
      },
    }
  );

  const addPost = (e) => {
    e.preventDefault();
    if (imageFile) {
      console.log("its hwere image");
      Resizer.imageFileResizer(
        imageFile,
        720,
        720,
        "JPEG",
        100,
        0,
        //callback each resize gives uri
        (uri) => {
          try {
            mutation.mutate({ descp, img: uri });
            return;
          } catch (e) {
            console.log(e);
            showToast("Image upload error", "Something went wrong", "error");
          }
        },
        "base64"
      );
    } else {
      mutation.mutate({ descp });
    }
    setDescp("");
    setImageFile(null);
  };

  const fallBackSrc =
    "https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?w=2000";

  const imagePreview = imageFile && URL.createObjectURL(imageFile);
  return (
    <Box
      bg={bg}
      color={text}
      mb={5}
      boxShadow="0px 0px 25px -10px rgba(0, 0, 0, 0.38)"
      borderRadius={20}
    >
      <Box p={5} w="full">
        <Flex className="top" alignItems="center" gap={5}>
          <Image
            src={user?.profilepic}
            alt="profile"
            fallbackSrc={fallBackSrc}
            w={10}
            h={10}
            objectFit="cover"
            borderRadius="full"
          />
          <Input
            border="none"
            outline="none"
            bg="transparent"
            width="60%"
            color={text}
            type="text"
            placeholder={`What's on your mind, ${user?.name}`}
            value={descp}
            onChange={(e) => setDescp(e.target.value)}
          />
          {imagePreview && (
            <Image
              src={imagePreview}
              alt=""
              h={20}
              w={20}
              objectFit="cover"
              borderRadius={10}
            />
          )}
        </Flex>
        <hr style={{ margin: "20px 0px", border: "none", height: "0.5px" }} />
        <Flex alignItems="center" justify="space-between">
          <Flex alignItems="center" gap={5}>
            <Input
              type="file"
              id="file"
              display="none"
              onChange={(e) => setImageFile(e.target.files[0])}
            />

            <label htmlFor="file">
              <Flex alignItems="center" gap={3} fontSize="xs" color="gray">
                <Image src="/images/img.png" alt="" h={5} />
                <Text>Add Photo/Video</Text>
              </Flex>
            </label>
            <Flex alignItems="center" gap={3} fontSize="xs" color="gray">
              <Image src="/images/map.png" alt="" h={5} />
              <Text>Add Place</Text>
            </Flex>
            <Flex alignItems="center" gap={3} fontSize="xs" color="gray">
              <Image src="/images/friend.png" alt="" h={5} />
              <Text>Tag friends</Text>
            </Flex>
          </Flex>

          <Button
            border="none"
            color="white"
            bg="brand.100"
            borderRadius={10}
            ml="auto"
            onClick={addPost}
          >
            Share
          </Button>
        </Flex>
      </Box>
      {mutation.isLoading && <Text>Uploading...</Text>}
    </Box>
  );
};

export default Share;
