import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const AllTask = () => {
  const data = useContext(AuthContext);

  return (
    <>
      <div id="TaskList" className="bg-slate-500 p-5 rounded-md m-3  ">
        <div className="bg-green-500 p-4 mb-4 text-white flex justify-between rounded-md text-center ">
          <h1 className="w-1/5 text-white"> Employee</h1>
          <h2 className="w-1/5 text-white">New Task</h2>
          <h3 className="w-1/5 text-white">Active Task</h3>
          <h2 className="w-1/5 text-white"> Completed</h2>
          <h3 className="w-1/5 text-white">Failed</h3>
        </div>
        {data.employees.map((elem) => {
          return (
            <div>
              <div className=" border-[2px] border-black p-3 text-center mb-2 text-white flex justify-between rounded-md ">
                <h1 className="w-1/5 text-white"> {elem.firstName}</h1>
                <h2 className="w-1/5 text-white">New Task</h2>
                <h3 className="w-1/5 text-white">Active Task</h3>
                <h2 className="w-1/5 text-white"> Completed</h2>
                <h3 className="w-1/5 text-white">Failed</h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllTask;
