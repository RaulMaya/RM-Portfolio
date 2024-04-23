import React from "react";
import Auth from "../utils/auth";

import NavBarComponent from "../components/NavBarComponent";
import UDHeaderComponent from "../components/UserDashboard/UDHeaderComponent";
import UDProjectCard from "../components/UserDashboard/UDProjectCard";
import Authenticate from "./Authenticate";



import { QUERY_SINGLE_USER } from "../utils/queries"
import { useQuery } from '@apollo/client';

const UserDashboard = ({ isLoggedIn }) => {

  const userIdx = Auth.getUser().data

  const { loading, error, data, refetch } = useQuery(QUERY_SINGLE_USER, {
    variables: { userId: userIdx._id },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const singleUser = data?.singleUser || []
  console.log(singleUser)

  if (!isLoggedIn) {
    return <Authenticate isLoggedIn={isLoggedIn} />; // Render the LoginModal if the user is not logged in
  }

  const likedProj = singleUser.likedProjects.map(p => {
    return <UDProjectCard key={p._id} title={p.name} img={p.portrait} refetch={refetch} userId={userIdx} projectId={p._id} />
  })

  return (
    <>
      <h1 className="text-center text-8xl md:text-10xl">USER DASHBOARD</h1>
      <UDHeaderComponent name={singleUser.username} company={singleUser.company} likes={singleUser.likedProjectsCount} comments={singleUser.commentsCount} />
      {likedProj}
      <NavBarComponent />
    </>
  );
};

export default UserDashboard;