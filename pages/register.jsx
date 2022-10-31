import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import UnAuthenticatedRoute from "../components/Common/UnAuthenticatedRoute";

const Register = () => {
  return (
    <UnAuthenticatedRoute>
      <Flex
        h="100vh"
        bg="rgb(193,190,255)"
        alignItems="center"
        justify="center"
      >
        <Flex
          w="50%"
          minH={500}
          borderRadius={10}
          backgroundPosition="center"
          color="white"
          overflow="hidden"
        >
          <Flex
            flex={1}
            p="50"
            direction="column"
            gap={25}
            color="#555"
            bg="white"
            justify="center"
          >
            <Text fontSize="30px" fontWeight="medium">
              Register
            </Text>

            <form>
              <Flex direction="column" gap={19}>
                <FormControl>
                  <FormLabel fontWeight="normal">Full Name</FormLabel>
                  <Input type="text" placeholder="Full Name" />
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight="normal">Username</FormLabel>
                  <Input type="text" placeholder="Username" />
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight="normal">Email</FormLabel>
                  <Input type="email" placeholder="Email" />
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight="normal">Password</FormLabel>
                  <Input type="password" placeholder="password" />
                </FormControl>
                <Button
                  type="submit"
                  w="50%"
                  color="white"
                  bg="#938eef"
                  p={3}
                  borderRadius="none"
                >
                  Register
                </Button>
              </Flex>
            </form>
          </Flex>
          <Flex
            direction="column"
            gap={7}
            flex={1}
            background={`linear-gradient(rgba(39,11,96,0.5),rgba(39,11,96,0.5)), url("/images/pic1.jpeg")`}
            backgroundSize="cover"
            p="50"
            justify="center"
          >
            <Heading fontSize="100px" lineHeight="100px">
              Hello world.
            </Heading>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus amet doloremque animi laudantium qui culpa repellendus
              enim. Id, excepturi veniam.
            </Text>
            <Text fontSize="sm">Already have an account?</Text>
            <Link href="/login">
              <Button
                w="50%"
                p={3}
                bg="white"
                color="rebeccapurple"
                cursor="pointer"
              >
                Log In
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </UnAuthenticatedRoute>
  );
};

export default Register;
