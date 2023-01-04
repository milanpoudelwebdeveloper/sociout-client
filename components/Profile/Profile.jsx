import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Link from "next/link";

const Profile = () => {
  const bg = useColorModeValue("light.bg", "dark.bg");
  const text = useColorModeValue("light.text", "dark.text");
  const border = useColorModeValue("light.border", "dark.border");
  const dummyData = {
    id: 1,
    name: "John Doe",
    userId: 1,
    profilePic: "https://picsum.photos/200",
    coverPic: "https://picsum.photos/200",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ex.",
    fb: "https://facebook.com",
    insta: "https://instagram.com",
    twitter: "https://twitter.com",
    linkedIn: "https://linkedin.com",
    pinInterest: "https://pinterest.com",
  };

  return (
    <Box color={text}>
      <Box w="full" h={300} position="relative">
        <Image
          src={dummyData?.coverPic}
          alt="cover pic"
          w="full"
          h="full"
          objectFit="cover"
        />
        <Image
          src={dummyData?.profilePic}
          alt="profile pic"
          w={200}
          h={200}
          objectFit="cover"
          rounded="full"
          position="absolute"
          left={0}
          right={0}
          margin="auto"
          top={200}
        />
      </Box>
      <Box py={5}>
        <Flex
          h={180}
          borderRadius={20}
          boxShadow="0px 0px 25px -10px rgba(0, 0, 0, 0.38)"
          bg={bg}
          justify="space-around"
          alignItems="center"
          py={32}
        >
          <Flex gap={4} alignItems="center" p={12}>
            <Link href={dummyData?.fb} target="_blank">
              <FacebookTwoToneIcon />
            </Link>
            <Link href={dummyData?.insta} target="_blank">
              <InstagramIcon />
            </Link>
            <Link href={dummyData?.twitter} target="_blank">
              <TwitterIcon />
            </Link>
            <Link href={dummyData?.linkedIn} target="_blank">
              <LinkedInIcon />
            </Link>
            <Link href={dummyData?.pinInterest} target="_blank">
              <PinterestIcon />
            </Link>
          </Flex>
          <Flex direction="column" justify="center">
            <Text>{dummyData?.name}</Text>
            <Flex gap={10}>
              <Flex>
                <PlaceIcon />
                <Text>USA</Text>
              </Flex>
              <Flex>
                <LanguageIcon />
                <Text>www.facebook.com</Text>
              </Flex>
            </Flex>
            <Button>Follow</Button>
          </Flex>
          <Box>
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Profile;
