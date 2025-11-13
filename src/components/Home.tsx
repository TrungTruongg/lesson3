import { useState } from "react";
import CreateTaskModal from "./CreateTaskModal";
import List from "./TaskList";
import SearchItem from "./SearchItem";

function Home() {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="min-h-screen bg-gray-50 ">
        <div className="w-full  px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* <div className="flex items-center gap-2 border border-gray-300 rounded-sm px-3 py-2 bg-white w-80">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search Items"
                className="outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent flex-1"
              />
            </div> */}

            <SearchItem />

            <button
              onClick={handleOpenModal}
              className="bg-[#0013fe] text-white border rounded-[5px] px-6 py-2.5 text-sm font-normal cursor-pointer"
            >
              New Item
            </button>
          </div>
        </div>
        <List />
         
      </div>
     <CreateTaskModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default Home;
