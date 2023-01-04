import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Link from "next/link";
import UnAuthenticatedRoute from "../components/Common/UnAuthenticatedRoute";
import { useForm } from "react-hook-form";
import { axiosInstance } from "../axiosConfig";
import { useState } from "react";
import { useCustomToast } from "../customHooks/useToast";
import ErrorText from "../components/Common/ErrorText";
import { useRouter } from "next/router";

const Register = () => {
  const [serverError, setServerError] = useState("");
  const [success, setSuccess] = useState(false);
  const { showToast } = useCustomToast();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    if (success) {
      const timeId = setTimeout(() => {
        router.push("/login");
      }, 2000);
      return () => clearTimeout(timeId);
    }
  }, [success]);

  const registerHandler = async (data) => {
    try {
      const res = await axiosInstance.post("/auth/register", data);
      showToast(res?.data?.message, "Redirecting to login", "success");
      setSuccess(true);
    } catch (e) {
      setServerError(e.response.data.message);
    }
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

            <form onSubmit={handleSubmit(registerHandler)}>
              <Flex direction="column" gap={19}>
                <FormControl>
                  <FormLabel fontWeight="normal">Full Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Full Name"
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 3,
                        message: "Name should be at least 3 characters",
                      },
                    })}
                  />
                  {errors?.name && <ErrorText error={errors?.name?.message} />}
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight="normal">Username</FormLabel>
                  <Input
                    type="text"
                    placeholder="Username"
                    {...register("username", {
                      required: "Username is required",
                      minLength: {
                        value: 3,
                        message: "Username should be at least 3 characters",
                      },
                    })}
                  />
                  {errors?.username && (
                    <ErrorText error={errors?.username?.message} />
                  )}
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight="normal">Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors?.email && (
                    <ErrorText error={errors?.email?.message} />
                  )}
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight="normal">Password</FormLabel>
                  <Input
                    type="password"
                    placeholder="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 4,
                        message: "Password should be at least 4 characters",
                      },
                    })}
                  />
                  {errors?.password && (
                    <ErrorText error={errors?.password?.message} />
                  )}
                </FormControl>
                {serverError && <ErrorText error={serverError} />}
                <Button
                  type="submit"
                  w="50%"
                  color="white"
                  bg="#938eef"
                  p={3}
                  borderRadius="none"
                  loadingText="Registering"
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
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
