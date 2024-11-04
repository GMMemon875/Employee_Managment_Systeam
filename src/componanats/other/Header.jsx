import React from "react";

const Header = () => {
  const LogedOutUser = () => {
    localStorage.setItem("IsLogedInUser", " ");
    window.location.reload();
  };
  return (
    <>
      <div className="flex justify-between p-6">
        <div className="text-white flex">
          HELLO
          <br />
          UserName 👋
        </div>
        <button
          onClick={LogedOutUser}
          className="bg-red-500 px-6 rounded-lg text-white font-bold border-2 border-green-500"
        >
          LogOut
        </button>
      </div>
    </>
  );
};

export default Header;
