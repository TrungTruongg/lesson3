import { tasks, taskStatus } from "../constants";
import Card from "./Card";

function List() {
  return (
    <div className="p-7 pt-0">
      <div className="grid grid-cols-4 gap-4">
        {taskStatus.map((status) => {
          const taskForStatus = tasks.filter(
            (task) => task.statusId === status.statusId
          );

          return (
            <div key={status.statusId} className="shrink-0 w-full">
              <div className="bg-slate-300 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                 
                    <div className="flex items-center gap-[21px]">
                      <h2 className="text-lg font-bold text-[15px]">
                        {status.name}
                      </h2>
                      <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full text-[13px] font-bold">
                        {taskForStatus.length}
                      </span>
                    </div>

                    <div className="flex gap-1.5 items-center">
                      <button className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full text-[13px] font-bold">
                      +
                    </button>
                    <button className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full text-[13px] font-bold">
                      ···
                    </button>
                    </div>
                  
                </div>

                <div className="space-y-3">
                  {taskForStatus.map((task: any) => {
                    return (
                      <Card
                        key={task.taskId}
                        taskId={task.taskId}
                        title={task.title}
                        description={task.description}
                        assignedTo={task.assignedTo}
                        deadline={task.deadline}
                        flagId={task.flagId}
                        totalAttachments={task.totalAttachments}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
