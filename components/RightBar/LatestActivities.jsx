import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const LatestActivities = () => {
  return (
    <>
      <Flex justify="space-between" alignItems="center" mt={5}>
        <Flex alignItems="center" gap={2.5}>
          <Image
            src="https://bit.ly/sage-adebayo"
            alt="Segun Adebayo"
            w={41}
            h={41}
            borderRadius={"50%"}
            objectFit="cover"
          />
          <Text fontWeight="medium">John Doe</Text>
          <Text>liked your photo</Text>
        </Flex>
        <Text>1 min ago</Text>
      </Flex>
      <Flex justify="space-between" alignItems="center" mt={5}>
        <Flex alignItems="center" gap={2.5}>
          <Image
            src="https://bit.ly/sage-adebayo"
            alt="Segun Adebayo"
            w={41}
            h={41}
            borderRadius={"50%"}
            objectFit="cover"
          />
          <Text fontWeight="medium">John Doe</Text>
          <Text>liked your photo</Text>
        </Flex>
        <Text>1 min ago</Text>
      </Flex>
    </>
  );
};

export default LatestActivities;
