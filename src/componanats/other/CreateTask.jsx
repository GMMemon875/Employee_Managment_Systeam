import React from "react";

const CreateTask = () => {
  return (
    <>
      <div className="h-[300px] bg-slate-500 m-3 rounded-md p-2">
        <form action="">
          <div className="flex justify-between">
            <div>
              <div>
                <h1 className=" text-white ml-3">Task Title </h1>
                <input
                  className="w-[500px] text-white m-3 p-1 placeholder:ml-9 mt-0 border-[1px] placeholder:text-[14px] border-black rounded-lg bg-transparent placeholder:text-[#1c1c1c1]"
                  type="text"
                  placeholder="Make a UI design"
                />
              </div>
              <div>
                <h1 className=" text-white ml-3">Date </h1>
                <input
                  className="w-[500px] text-white m-3 p-1 mt-0 border-[1px] placeholder:text-[14px] border-black rounded-lg bg-transparent placeholder:text-[#1c1c1c1]"
                  type="Date"
                  placeholder="Make a UI design"
                />
              </div>
              <div>
                <h1 className=" text-white ml-3">Asign To </h1>
                <input
                  className="w-[500px] text-white m-3 p-1 mt-0 border-[1px] placeholder:text-[14px] border-black rounded-lg bg-transparent placeholder:text-[#1c1c1c1]"
                  type="text"
                  placeholder="Employee Name"
                />
              </div>
              <div>
                <h1 className=" text-white ml-3">Task Title </h1>
                <input
                  className="w-[500px] text-white m-3 p-1 mt-0 border-[1px] placeholder:text-[14px] border-black rounded-lg bg-transparent placeholder:text-[#1c1c1c1]"
                  type="text"
                  placeholder="Design ,dev, etc"
                />
              </div>
            </div>
            <div>
              <h1 className="text-white font-semibold">Description</h1>
              <textarea
                className="h-52 p-3  w-96 border-[1px]  border-black rounded-md text-white resize-none bg-transparent "
                name=""
                id=""
                placeholder=""
              ></textarea>
              <div className="">
                <button className="bg-orange-500 w-full p-2 rounded-md text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateTask;
