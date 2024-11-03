import React from "react";
import Header from "../other/Header";
import TaskNumber from "../other/TaskNumber";
import TaskList from "../other/TaskList";

const EmployeeDashboard = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Header data={data} />
      <TaskNumber />
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;
