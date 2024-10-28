import React from "react";

const TaskNumber = () => {
  return (
    <>
      <div className=" flex ">
        <div className="text-2xl text-white w-[300px] bg-red-500 p-5 h-[130px] m-4 rounded-lg">
          <span className="p-4">0</span> <br />
          New Task
        </div>

        <div className="text-2xl text-white w-[300px] bg-green-500 p-5 h-[130px] m-4 rounded-lg">
          <span className="p-4">0</span> <br />
          New Task
        </div>

        <div className="text-2xl text-white w-[300px] bg-amber-500 p-5 h-[130px] m-4 rounded-lg">
          <span className="p-4">0</span> <br />
          New Task
        </div>

        <div className="text-2xl text-white w-[300px] bg-blue-500 p-5 h-[130px] m-4 rounded-lg">
          <span className="p-4">0</span> <br />
          New Task
        </div>
      </div>
    </>
  );
};

export default TaskNumber;
