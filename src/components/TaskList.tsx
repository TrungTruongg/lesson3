import { MoreIcon, PlusIcon } from "../assets/icon/Icons";
import { tasks, taskStatus } from "../constants";
import TaskCard from "./TaskCard";

function TaskList() {
  return (
    <div className="p-6 pt-0">
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-[18px]">
        {taskStatus.map((status) => {
          const taskForStatus = tasks.filter(
            (task) => task.statusId === status.statusId
          );

          return (
            <div
              key={status.statusId}
              className=" w-full bg-slate-300 rounded-lg p-4"
            >
              <div className="flex items-center justify-between mb-4 ">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-[15px]">{status.name}</span>
                  <button
                    className="flex items-center justify-center bg-[#d5d5d5] rounded-full 
                  h-[30px] w-[30px] text-[12px] font-bold cursor-pointer 
                  border border-transparent hover:border-blue-700 transition"
                  >
                    {taskForStatus.length}
                  </button>
                </div>

                <div className="flex gap-1.5 items-center">
                  <button
                    className="flex items-center justify-center bg-[#d5d5d5] rounded-full 
                  h-[30px] w-[30px] font-bold cursor-pointer 
                  border border-transparent hover:border-blue-700 transition"
                  >
                    <PlusIcon />
                  </button>
                  <button className="flex items-center justify-center bg-[#d5d5d5] rounded-full  h-[30px] w-[30px] font-bold cursor-pointer border border-transparent hover:border-blue-700 transition">
                    <MoreIcon />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {taskForStatus.map((task: any) => {
                  return (
                    <TaskCard
                      key={task.taskId}
                      task={task}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TaskList;
