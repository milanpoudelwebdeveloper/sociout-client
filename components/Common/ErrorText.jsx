import { Text } from "@chakra-ui/react";
import React from "react";

const ErrorText = ({ error }) => {
  return (
    <Text color="red" my={1}>
      {error}
    </Text>
  );
};

export default ErrorText;
