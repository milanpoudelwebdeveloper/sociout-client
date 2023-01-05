import { Box } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/Common/Layout";
import ProtectedRoute from "../components/Common/ProtectedRoute";
import Posts from "../components/Home/Posts/Posts";
import Share from "../components/Home/Share";
import Stories from "../components/Home/Stories/Stories";

const Home = () => {
  return (
    <ProtectedRoute>
      <Layout>
        <Stories />
        <Share />
        <Posts />
      </Layout>
    </ProtectedRoute>
  );
};

export default Home;
