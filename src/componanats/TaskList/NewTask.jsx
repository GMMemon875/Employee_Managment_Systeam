import React from "react";

const NewTask = ({ data }) => {
  return (
    <div className="bg-green-300 w-[25%] h-[285px] shrink-0 rounded-md ">
      <div className="flex justify-between p-4">
        <h2 className="bg-red-800 p-2 text-white rounded-lg font-semibold">
          {data.TaskCategory}
        </h2>
        <h3 className="p-1 text-white">{data.TaskTitle}</h3>
      </div>
      <div>
        <h1 className="text-white text-2xl ml-5">{data.TaskDate}</h1>
      </div>
      <div className="flex justify-between p-4 ">
        <p className=" ">{data.TaskDescriptioon}</p>
      </div>
      <div className="justify-around flex">
        <button className="bg-red-500 text-white w-48 rounded-md">
          NewTask
        </button>
      </div>
    </div>
  );
};

export default NewTask;
