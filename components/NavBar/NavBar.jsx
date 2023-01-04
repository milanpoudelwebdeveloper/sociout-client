import React, { useContext } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {
  Button,
  Flex,
  Image,
  Input,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { AuthContext } from "../context/authContext";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("light.bg", "dark.bg");
  const border = useColorModeValue("light.border", "dark.border");
  const text = useColorModeValue("light.text", "dark.text");
  const logoColor = useColorModeValue("light.logo", "dark.logo");

  const { logOut, user } = useContext(AuthContext);
  console.log("user here is", user);

  const fallBackSrc =
    "https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?w=2000";
  return (
    <Flex
      justify="space-between"
      py={3}
      px={4}
      borderBottomColor={border}
      borderBottomWidth={1}
      position="sticky"
      top={0}
      bg={bg}
      zIndex={100}
      h="70"
    >
      <Flex alignItems="center" gap={7}>
        <Link href="/">
          <Text fontWeight="bold" fontSize="lg" color={logoColor}>
            Socio-out
          </Text>
        </Link>
        <HomeOutlinedIcon />
        {colorMode === "light" ? (
          <DarkModeOutlinedIcon onClick={toggleColorMode} />
        ) : (
          <WbSunnyOutlinedIcon onClick={toggleColorMode} />
        )}
        <GridViewOutlinedIcon />
        <Flex
          alignItems="center"
          gap={1}
          borderWidth={1}
          borderColor={border}
          borderRadius={5}
          p={1}
        >
          <SearchOutlinedIcon />
          <Input
            type="text"
            placeholder="Search..."
            border="none"
            _focus={{ outline: "none", boxShadow: "none" }}
            height="full"
            w={501}
            color={text}
          />
        </Flex>
      </Flex>
      <Flex alignItems="center" gap={5}>
        <Button onClick={logOut}>Log Out</Button>
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon onClick={logOut} />
        <Flex alignItems="center" gap={2.5} fontWeight="medium">
          <Image
            fallbackSrc={fallBackSrc}
            src={user?.profilepic}
            alt="Segun Adebayo"
            w={31}
            h={31}
            borderRadius={"50%"}
            objectFit="cover"
          />
          <Text>{user?.name}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavBar;
