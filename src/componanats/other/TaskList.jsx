import React from "react";
import AcceptTast from "../TaskList/AcceptTast";
import CompleteTask from "../TaskList/CompleteTask";
import NewTask from "../TaskList/NewTask";
import FaildTask from "../TaskList/FaildTask";

const TaskList = ({ data }) => {
  return (
    <>
      <div>
        <div
          id="TaskList"
          className="h-[299px] overflow-x-auto p-4 flex flex-nowrap gap-3"
        >
          {data.tasks.map((elem, idx) => {
            if (elem.Active) {
              return <AcceptTast key={idx} data={elem} />;
            }
            if (elem.Completed) {
              return <CompleteTask key={idx} data={elem} />;
            }
            if (elem.Failed) {
              return <FaildTask key={idx} data={elem} />;
            }
            if (elem.NewTask) {
              return <NewTask key={idx} data={elem} />;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default TaskList;
