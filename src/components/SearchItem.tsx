import { SearchIcon } from "../assets/icon/Icons";

function SearchItem() {
  return (
    <div className="border-[#e6ecf0] border border-solid rounded-[5px] pl-2.5 flex items-center">
      <SearchIcon />
      <input
        type="text"
        className="p-2.5 w-[318px] border-none outline-none text-sm placeholder-[#c4c4c4]"
        placeholder="Search Items"
      />
    </div>
  );
}

export default SearchItem;
