import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Flex, Image, Input, Text } from "@chakra-ui/react";
import Link from "next/link";

const NavBar = () => {
  return (
    <Flex
      justify="space-between"
      py={3}
      px={4}
      borderBottom="1px solid lightgray"
      position="sticky"
      top={0}
      zIndex={100}
      bg="white"
      h="70"
    >
      <Flex alignItems="center" gap={7}>
        <Link href="/">
          <Text fontWeight="bold" fontSize="lg" color="darkblue">
            Socio-out
          </Text>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <GridViewOutlinedIcon />
        <Flex
          alignItems="center"
          gap={1}
          border="1px solid lightgray"
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
          />
        </Flex>
      </Flex>
      <Flex alignItems="center" gap={5}>
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <Flex alignItems="center" gap={2.5} fontWeight="medium">
          <Image
            src="https://bit.ly/sage-adebayo"
            alt="Segun Adebayo"
            w={31}
            h={31}
            borderRadius={"50%"}
            objectFit="cover"
          />
          <Text>Span Doe</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavBar;
