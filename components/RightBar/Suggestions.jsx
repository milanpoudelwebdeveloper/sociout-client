import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Suggestions = () => {
  return (
    <>
      <Flex justify="space-between" alignItems="center" mt={5}>
        <Flex alignItems="center" gap={2.5} fontWeight="medium">
          <Image
            src="https://bit.ly/sage-adebayo"
            alt="Segun Adebayo"
            w={41}
            h={41}
            borderRadius={"50%"}
            objectFit="cover"
          />
          <Text>Span Doe</Text>
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
      <Flex justify="space-between" alignItems="center" mt={5}>
        <Flex alignItems="center" gap={2.5} fontWeight="medium">
          <Image
            src="https://bit.ly/sage-adebayo"
            alt="Segun Adebayo"
            w={41}
            h={41}
            borderRadius={"50%"}
            objectFit="cover"
          />
          <Text>Span Doe</Text>
        </Flex>
        <Flex gap={3}>
          <Button padding={5} color="white" bg="#5271ff" h={9}>
            Follow
          </Button>
          <Button padding={5} color="white" bg="#f0544f" h={9}>
            Dismiss
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Suggestions;
