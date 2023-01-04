import { Box } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/Common/Layout";
import ProtectedRoute from "../components/Common/ProtectedRoute";
import Posts from "../components/Home/Posts/Posts";
import Stories from "../components/Home/Stories/Stories";

const Home = () => {
  return (
    <ProtectedRoute>
      <Layout>
        <Stories />
        <Posts />
      </Layout>
    </ProtectedRoute>
  );
};

export default Home;
