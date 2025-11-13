import { useState } from "react";
import { CloseIcon, FlagIcon } from "../assets/icon/Icons";
import { taskStatus, users } from "../constants";

function CreateTaskModal({ open, onClose, onSave }: any) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [assignedTo, setAssignedTo] = useState(1);
  const [statusId, setStatusId] = useState(1);

  if (!open) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    const newTask = {
      taskId: Date.now(),
      title: title,
      description: description,
      deadline: new Date(deadline),
      assignedTo: assignedTo,
      statusId: statusId,
      flagId: 1,  
      totalAttachments: 0
    };

    onSave(newTask);

    setTitle("");
    setDescription("");
    setDeadline("");
    setAssignedTo(1);
    setStatusId(1);

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-20"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-xl w-[634px] max-h-[538px] overflow-y-auto shadow-xl">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="inline-flex items-center justify-center w-8 h-8 border border-[#e9eaeb] rounded-[10px] gap-2.5">
              <FlagIcon color="#00FF00" />
            </div>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <CloseIcon />
            </button>
          </div>

          <h2 className="text-lg font-semibold mb-5 leading-7 ">Save task</h2>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSave}>
            {/* Title and End Date */}
            <div className="flex gap-4">
              <div className="w-[407px]">
                <label className="block text-sm font-medium mb-1">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Type title of task"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <p className="text-xs text-red-500 mt-1">Title is required</p>
              </div>

              <div className="w-[163px]">
                <label className="block text-sm font-medium mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  onChange={(e) => setDeadline(e.target.value)}
                  defaultValue="15 / 06 / 2024"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Description and Assign */}
            <div className="flex gap-4">
              <div className="w-[407px]">
                <label className="block text-sm font-medium mb-1">
                  Description
                </label>
                <textarea
                  placeholder="Type description..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                />
              </div>
              <div className="w-[163px]">
                <label className="block text-sm font-medium mb-1">Assign</label>

                <select
                  onChange={(e) => setAssignedTo(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {users.map((user) => (
                    <option value={user.userId} key={user.userId}>
                      {user.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium mb-1">Status</label>
              <select
                value={statusId}
                onChange={(e) => setStatusId(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-[#666666] focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="" disabled>
                  Choose status
                </option>
                {taskStatus.map((status) => (
                  <option
                    key={status.statusId}
                    value={status.statusId}
                    className="text-gray-900"
                  >
                    {status.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2.5 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTaskModal;
