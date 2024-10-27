import React, { useState } from "react";

const Login = () => {
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const onclicHandler = (e) => {
    e.preventDefault();
    console.log("email", email, "password", password);

    Setpassword("");
    Setemail("");
  };

  return (
    <>
      <div className=" flex h-screen w-screen justify-center items-center r">
        <div className="border-2 p-20 rounded-lg">
          <form
            onSubmit={(e) => {
              onclicHandler(e);
            }}
            className=" flex flex-col justify-center items-center"
            action=""
          >
            <input
              value={email}
              onChange={(e) => {
                Setemail(e.target.value);
              }}
              className="bg-transparent p-2 w-80 rounded-lg text-white border-2"
              type="email"
              placeholder="Enter Email"
            />
            <input
              value={password}
              onChange={(e) => {
                Setpassword(e.target.value);
              }}
              className="mt-4 bg-transparent p-2 w-80 rounded-lg text-white border-2"
              type="password"
              placeholder="Enter Password"
            />
            <button className="mt-4 bg-orange-500 border-2 text-white p-2 rounded-lg font-bold w-32">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
