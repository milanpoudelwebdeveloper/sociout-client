import { Box } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/Common/Layout";
import ProtectedRoute from "../components/Common/ProtectedRoute";

const Home = () => {
  return (
    <ProtectedRoute>
      <Layout>
        <Box>Home</Box>
      </Layout>
    </ProtectedRoute>
  );
};

export default Home;
