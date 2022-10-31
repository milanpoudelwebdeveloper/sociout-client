import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import UnAuthenticatedRoute from "../components/Common/UnAuthenticatedRoute";
import { AuthContext } from "../components/context/authContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const router = useRouter();

  const loginHandler = (e) => {
    e.preventDefault();
    login();
    router.push("/");
  };
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
            direction="column"
            gap={7}
            flex={1}
            background={`linear-gradient(rgba(39,11,96,0.5),rgba(39,11,96,0.5)), url("/images/pic1.jpeg")`}
            backgroundSize="cover"
            p="50"
          >
            <Heading fontSize="100px" lineHeight="100px">
              Hello world.
            </Heading>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus amet doloremque animi laudantium qui culpa repellendus
              enim. Id, excepturi veniam.
            </Text>
            <Text fontSize="sm">Don't you have an account?</Text>
            <Link href="/register">
              <Button
                w="50%"
                p={3}
                bg="white"
                color="rebeccapurple"
                cursor="pointer"
              >
                Register
              </Button>
            </Link>
          </Flex>
          <Flex
            flex={1}
            p="50"
            direction="column"
            gap={30}
            color="#555"
            bg="white"
            justify="center"
          >
            <Text fontSize="30px" fontWeight="medium">
              Log In
            </Text>

            <form onSubmit={loginHandler}>
              <Flex direction="column" gap={30}>
                <FormControl>
                  <FormLabel fontWeight="normal">Username</FormLabel>
                  <Input type="text" placeholder="Username" />
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
                  Login
                </Button>
              </Flex>
            </form>
          </Flex>
        </Flex>
      </Flex>
    </UnAuthenticatedRoute>
  );
};

export default Login;
