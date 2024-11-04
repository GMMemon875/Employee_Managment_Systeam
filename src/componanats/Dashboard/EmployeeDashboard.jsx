import React from "react";
import Header from "../other/Header";
import TaskNumber from "../other/TaskNumber";
import TaskList from "../other/TaskList";

const EmployeeDashboard = ({ data }) => {
  return (
    <div>
      <Header data={data} />
      <TaskNumber data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
