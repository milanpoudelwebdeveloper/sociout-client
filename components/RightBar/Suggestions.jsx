import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import { axiosInstance } from "../../axiosConfig";

const Suggestions = () => {
  const textColor = useColorModeValue("light.text", "dark.text");
  const { data, isLoading, error } = useQuery("suggestions", () =>
    axiosInstance.get("/users").then((res) => res?.data?.users)
  );

  const fallBackSrc =
    "https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?w=2000";

  console.log(data);
  return (
    <Flex direction="column">
      {data?.map((user) => (
        <Box>
          <Flex
            justify="space-between"
            alignItems="center"
            mt={5}
            color={textColor}
          >
            <Flex alignItems="center" gap={2.5} fontWeight="medium">
              <Image
                fallbackSrc={fallBackSrc}
                src={user?.profilepic}
                alt="Segun Adebayo"
                w={41}
                h={41}
                borderRadius={"50%"}
                objectFit="cover"
              />
              <Text>{user?.name}</Text>
            </Flex>
            <Flex gap={3}>
              <Button px={5} color="white" bg="#5271ff" h={9}>
                Follow
              </Button>
              <Button px={5} color="white" bg="#f0544f" h={9}>
                Dismiss
              </Button>
            </Flex>
          </Flex>
        </Box>
      ))}
    </Flex>
  );
};

export default Suggestions;
