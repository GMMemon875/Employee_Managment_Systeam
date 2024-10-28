import React from "react";
import Header from "../other/Header";
import TaskNumber from "../other/TaskNumber";
import TaskList from "../other/TaskList";

const EmployeeDashboard = () => {
  return (
    <div>
      <Header></Header>
      <TaskNumber></TaskNumber>
      <TaskList></TaskList>
    </div>
  );
};

export default EmployeeDashboard;
