import React, { useContext, useEffect, useState } from "react";
import AdminDashbord from "./componanats/Dashboard/AdminDashbord";
// import { gettLocalSstorage, setLocalSstorage } from "./utils/LocalStorage";
import EmployeeDashboard from "./componanats/Dashboard/EmployeeDashboard";
import Login from "./componanats/Auth/Login";
import { AuthContext } from "./Context/AuthProvider";
import { setLocalSstorage } from "./utils/LocalStorage";

const App = () => {
  const [user, setUser] = useState(null);
  const [logedIn, setLogedIn] = useState(null);
  const userData = useContext(AuthContext);

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
        setLogedIn(employees);
        localStorage.setItem(
          "IsLogedInUser",
          JSON.stringify({ roll: "employee" })
        );
      }
    } else {
      // console.log(" Invalid User Or Admin");
    }
  };
  handleSubmit();

  useEffect(() => {
    setLocalSstorage();
  }, []);

  // const data = useContext(AuthContext);
  // console.log(data);
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
