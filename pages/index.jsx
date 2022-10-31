import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/Common/Layout";
import ProtectedRoute from "../components/Common/ProtectedRoute";
import Posts from "../components/Home/Posts/Posts";
import Stories from "../components/Home/Stories/Stories";

const Home = () => {
  const bg = useColorModeValue("light.bgSoft", "dark.bgSoft");
  return (
    <ProtectedRoute>
      <Layout>
        <Box bg={bg} py={5} px={18}>
          <Stories />
          <Posts />
        </Box>
      </Layout>
    </ProtectedRoute>
  );
};

export default Home;
