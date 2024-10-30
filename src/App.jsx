import React, { useEffect } from "react";
import AdminDashbord from "./componanats/Dashboard/AdminDashbord";
import { gettLocalSstorage, setLocalSstorage } from "./utils/LocalStorage";
// import EmployeeDashboard from "./componanats/Dashboard/EmployeeDashboard";

// import Login from "./componanats/Auth/Login";

const App = () => {
  useEffect(() => {
    gettLocalSstorage();
  });
  return (
    <>
      {/* <Login /> */}
      {/* <EmployeeDashboard></EmployeeDashboard> */}
      <AdminDashbord></AdminDashbord>
    </>
  );
};

export default App;
