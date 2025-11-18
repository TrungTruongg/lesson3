import { useEffect, useState } from "react";
import CreateTaskModal from "./CreateTaskModal";
import List from "./TaskList";
import SearchItem from "./SearchItem";
import { tasks } from "../constants";
import { Box, Button } from "@mui/material";

function Home() {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const dataFromLocalstorage: any = () => {
    const savedTasks = localStorage.getItem("taskList");
    return savedTasks ? JSON.parse(savedTasks) : tasks;
  };

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
      <Box className="min-h-screen bg-gray-50 ">
        <Box className="max-w-7xl mx-auto flex justify-between items-center py-4">
          <SearchItem searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          <Button
            variant="contained"
            onClick={handleOpenModal}
            sx={{
              textTransform: "none",
              backgroundColor: "#0013fe",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            New Item
          </Button>
        </Box>

        <List tasks={filteredTasks} onUpdateTask={handleUpdateTask} />
      </Box>
      <CreateTaskModal
        open={open}
        onClose={() => setOpen(false)}
        onSave={handleSaveTask}
      />
    </>
  );
}

export default Home;
