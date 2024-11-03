import React, { createContext, useEffect, useState } from "react";
import { gettLocalSstorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userdata, setUserdata] = useState(null);

  useEffect(() => {
    const { employees, admin } = gettLocalSstorage();
    setUserdata({ employees, admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userdata}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
