import { Box } from "@chakra-ui/react";
import React from "react";
import Layout from "../../components/Common/Layout";
import ProtectedRoute from "../../components/Common/ProtectedRoute";

const Profile = () => {
  return (
    <ProtectedRoute>
      <Layout>
        <Box>Profile</Box>
      </Layout>
    </ProtectedRoute>
  );
};

export default Profile;
