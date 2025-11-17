import { useEffect, useState } from "react";
import CreateTaskModal from "./CreateTaskModal";
import List from "./TaskList";
import SearchItem from "./SearchItem";
import { tasks } from "../constants";

function Home() {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const dataFromLocalstorage: any = () => {
    const savedTasks = localStorage.getItem("taskList");
    return savedTasks ? JSON.parse(savedTasks) : tasks;
  }

  const [taskList, setTaskList] = useState(dataFromLocalstorage);
 

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleSaveTask = (newTask: any) => {
    setTaskList([...taskList, newTask]);
    
  };

  const handleUpdateTask = (updatedTask: any) => {
    setTaskList(
      taskList.map((task: any) =>
        task.taskId === updatedTask.taskId ? updatedTask : task
      )
    );
    
  };

  const filteredTasks = taskList.filter((task: any) => {
    const query = searchTerm.toLowerCase();
    const title = task.title.toLowerCase();
    const description = task.description.toLowerCase();

    return title.includes(query) || description.includes(query);
  });
  return (
    <>
      <div className="min-h-screen bg-gray-50 ">
        <div className="w-full  px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <SearchItem searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <button
              onClick={handleOpenModal}
              className="bg-[#0013fe] text-white border rounded-[5px] px-6 py-2.5 text-sm font-normal cursor-pointer"
            >
              New Item
            </button>
          </div>
        </div>
        <List tasks={filteredTasks} onUpdateTask={handleUpdateTask} />
      </div>
      <CreateTaskModal
        open={open}
        onClose={() => setOpen(false)}
        onSave={handleSaveTask}
      />
    </>
  );
}

export default Home;
