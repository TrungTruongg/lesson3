import {
  ClockIcon,
  EditIcon,
  FlagIcon,
  AttachmentIcon,
} from "../assets/icon/Icons";
import { flags, users } from "../constants";

const TaskCard = ({ task }: any) => {
  const {
    taskId,
    title,
    description,
    flagId,
    assignedTo,
    deadline,
    totalAttachments,
  } = task;
  
  const usersAssigned = users.filter(
    (item) => item.userId === assignedTo
  );

  const flagsColorByTasks = flags.filter(
    (item) => item.flagId === flagId
  );

  const formatDate = new Date(deadline).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <div key={taskId} className="bg-white border border-gray-200 rounded-[5px] p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-sm">{title}</h3>
          <button className="text-gray-400 hover:text-gray-600">
            <EditIcon />
          </button>
        </div>

        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
          {description}
        </p>

        {usersAssigned.map((user: any) => (
          <div className="mb-3" key={user.userId}>
            <span className="inline-block bg-[#0013fe] text-white px-2 py-1 rounded-[5px] text-sm font-medium">
              {user.name}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-[#e6ecf0] -mx-4"></div>

      <div className="flex gap-5 items-center justify-center w-full pt-2 ">
        <div className="flex items-center gap-2 font-bold">
          <AttachmentIcon />
          {totalAttachments}
        </div>
        {flagsColorByTasks.map((flagColor: any) => (
          <FlagIcon color={flagColor.color} />
        ))}

        <div className="flex items-center gap-2 font-bold">
          <ClockIcon />
          {formatDate}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
