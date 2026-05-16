import { Search } from "lucide-react";

const SearchBar = ({ value, onChange, onSearch }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") onSearch?.();
  };

  return (
    <div
      className="
        relative flex items-center
        max-w-11/12 rounded-2xl
        border border-gray-200
        bg-white shadow-sm
        transition-all duration-300
        focus-within:ring-1 focus-within:ring-blue-300
        focus-within:border-blue-400
        focus-within:shadow-md focus-within:shadow-blue-100
        mx-5 lg:mx-0
      "
    >
      <div className="flex items-center pl-5 pr-2">
        <Search size={18} className="text-gray-400 transition-colors duration-200" />
      </div>

      <input
        type="text"
        placeholder="Search breaking news, politics, sports..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="
          w-full bg-transparent
          py-4 pr-4
          text-[15px] font-medium
          text-gray-800
          placeholder:text-gray-400
          placeholder:font-normal
          outline-none
        "
      />

      <div className="p-2">
        <button
          onClick={onSearch}
          className="
            flex items-center gap-2
            rounded-xl
            bg-blue-500 hover:bg-blue-400
            px-5 py-2.5
            text-sm font-semibold text-white
            transition-all duration-200
            active:scale-[0.97]
          "
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;