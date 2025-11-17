import { useState } from "react";
import {
  ClockIcon,
  EditIcon,
  FlagIcon,
  AttachmentIcon,
} from "../assets/icon/Icons";
import { flags, users } from "../constants";
import CreateTaskModal from "./CreateTaskModal";

const TaskCard = ({ task, onUpdate }: any) => {
  const {
    taskId,
    title,
    description,
    flagId,
    assignedTo,
    deadline,
    totalAttachments,
    statusId,
  } = task;

  const [open, setOpen] = useState(false);

  const usersAssigned = users.filter((item) => item.userId === assignedTo);

  const flagsColorByTasks = flags.filter((item) => item.flagId === flagId);

  const formatDate = new Date(deadline).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  const formatDateForInput = (date: Date) => {
    const d = new Date(date);

    if (isNaN(d.getTime())) {
      return ""; 
    }

    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const result = `${year}-${month}-${day}`;

    return result;
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleSave = (updatedTask: any) => {
    const taskToUpdate = {
      ...updatedTask,
      taskId: taskId, 
    };

    if (onUpdate) {
      onUpdate(taskToUpdate);
    }
  }
  return (
    <div
      key={taskId}
      className="bg-white border border-gray-200 rounded-[5px]  shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex flex-col gap-3 p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-sm">{title}</h3>
          <button
            onClick={handleOpenModal}
            className="text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            <EditIcon />
          </button>
        </div>

        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{description}</p>

        {usersAssigned.map((user: any) => (
          <div className="mb-3" key={user.userId}>
            <span className="inline-block bg-[#0013fe] text-white px-2 py-1 rounded-[5px] text-sm font-medium">
              {user.name}
            </span>
          </div>
        ))}
      </div>

      <div className="flex gap-4 items-center justify-center px-2 py-3 border-t border-[#e6ecf0] w-full ">
        <div className="flex items-center gap-2 font-bold">
          <AttachmentIcon disabled={totalAttachments > 0} />
          <span>{totalAttachments || null}</span>
        </div>

        {flagsColorByTasks.map((flagColor: any) => (
          <FlagIcon key={flagColor.flagId} color={flagColor.color} />
        ))}

        <div className="flex items-center gap-2 font-bold">
          <ClockIcon />
          <span>{formatDate}</span>
        </div>
      </div>
      <CreateTaskModal
        open={open}
        onClose={() => setOpen(false)}
        onSave={handleSave}
        titleModal={title}
        desModal={description}
        deadlineModal={formatDateForInput(deadline)}
        assignedToModal={assignedTo}
        statusIdModal={statusId}
        flagIdModal={flagId}
        totalAttachmentsModal={totalAttachments}
      />
    </div>
  );
};

export default TaskCard;
