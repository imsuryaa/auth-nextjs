import React from "react";

const UserProfile = ({ params }: any) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      ProfilePage
      <p className="text-4xl">Profile Page {params.id}</p>
    </div>
  );
};

export default UserProfile;