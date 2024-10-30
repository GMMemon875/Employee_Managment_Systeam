import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between p-6">
        <div className="text-white flex">
          HELLO
          <br />
          Mustafa 👋
        </div>
        <button className="bg-red-500 px-6 rounded-lg text-white font-bold border-2 border-green-500">
          LogOut
        </button>
      </div>
    </>
  );
};

export default Header;
