import React, { useContext, useEffect, useState } from "react";
import AdminDashbord from "./componanats/Dashboard/AdminDashbord";

import EmployeeDashboard from "./componanats/Dashboard/EmployeeDashboard";
import Login from "./componanats/Auth/Login";
import { AuthContext } from "./Context/AuthProvider";
import { setLocalSstorage } from "./utils/LocalStorage";

const App = () => {
  const [user, setUser] = useState(null);
  const [logedIn, setLoggedIn] = useState(null);
  const userData = useContext(AuthContext);

  useEffect(() => {
    const isLoggedInUser = localStorage.getItem("IsLogedInUser");

    // Check if the value exists before parsing
    if (isLoggedInUser) {
      try {
        const user = JSON.parse(isLoggedInUser);
        setUser(user.roll);
        setLoggedIn(user.data);
      } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
        localStorage.removeItem("IsLogedInUser"); // Remove invalid data
      }
    }
  }, []);

  useEffect(() => {
    setLocalSstorage();
  });
  const handleSubmit = (email, password) => {
    if (email == "admin@me.gmail.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("IsLogedInUser", JSON.stringify({ roll: "admin" }));
    } else if (userData) {
      const employees = userData.employees.find(
        (e) => email == e.email && e.password == password
      );
      if (employees) {
        setUser("employee");
        setLoggedIn(employees);
        localStorage.setItem(
          "IsLogedInUser",
          JSON.stringify({ roll: "employee", data: employees })
        );
      }
    } else {
      alert("Invalid UserName Or Password");
    }
  };

  return (
    <>
      {!user ? <Login handleSubmit={handleSubmit} /> : ""}
      {user == "admin" ? (
        <AdminDashbord />
      ) : user == "employee" ? (
        <EmployeeDashboard data={logedIn} />
      ) : null}
    </>
  );
};

export default App;
