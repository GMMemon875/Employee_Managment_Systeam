import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashbord = () => {
  return (
    <>
      <Header />
      <CreateTask />
      <AllTask />
    </>
  );
};

export default AdminDashbord;
