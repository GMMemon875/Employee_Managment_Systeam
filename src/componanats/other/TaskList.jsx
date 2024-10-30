import React from "react";

const TaskList = () => {
  return (
    <>
      <div>
        <div
          id="TaskList"
          className="h-[270px] overflow-x-auto p-4 flex flex-nowrap gap-3"
        >
          <div className="bg-red-300 w-[25%] h-[250px] shrink-0 rounded-md ">
            <div className="flex justify-between p-4">
              <h2 className="bg-red-800 p-2 text-white rounded-lg font-semibold">
                high
              </h2>
              <h3 className="p-1 text-white">29 feb 2024</h3>
            </div>
            <div>
              <h1 className="text-white text-2xl ml-5">Make a Youtube Video</h1>
            </div>
            <div className="flex justify-between p-4 ">
              <p className=" ">
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.excepturi consequuntur! Minus, repudiandae? Laborum,
                consectetur incidunt? Voluptate facilis ipsam molestias Lorem
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskList;
