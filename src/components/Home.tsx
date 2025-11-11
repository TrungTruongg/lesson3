import { SearchIcon } from "../assets/icon/Icons";
import List from "./List";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="flex w-full justify-between items-center px-8 py-4 ">
        <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 bg-white w-80">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search Items"
            className="outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent flex-1"
          />
        </div>

        <button className="bg-[#0013fe] text-white border rounded-[5px] px-6 py-2.5 text-sm font-medium cursor-pointer">
          New Item
        </button>
      </div>
      <List />
    </div>
  );
}

export default Home;
