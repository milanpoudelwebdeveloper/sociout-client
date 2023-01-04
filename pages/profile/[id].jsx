import React from "react";
import Layout from "../../components/Common/Layout";
import ProtectedRoute from "../../components/Common/ProtectedRoute";
import Profile from "../../components/Profile/Profile";

const ProfilePage = () => {
  return (
    <ProtectedRoute>
      <Layout>
        <Profile />
      </Layout>
    </ProtectedRoute>
  );
};

export default ProfilePage;
