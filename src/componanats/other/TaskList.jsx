import React from "react";

const TaskList = () => {
  return (
    <>
      <div>
        <div
          id="TaskList"
          className="h-[270px] overflow-x-auto p-4 flex flex-nowrap gap-3"
        >
          <div className="bg-red-300 w-[25%] h-[230px] shrink-0 rounded-md  flex"></div>
        </div>
      </div>
    </>
  );
};

export default TaskList;
