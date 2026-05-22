import { useContext } from "react";
import { NewsContext } from "../context/NewsContext";

const categories = [
  { label: "Top Stories", value: "" },
  { label: "Technology", value: "technology" },
  { label: "Business", value: "business" },
  { label: "Sports", value: "sport" },       // was "sports"
  { label: "Science", value: "science" },
];

const CategoryNav = () => {
  const { category, setCategory } = useContext(NewsContext);

  return (
    <div className="px-5 flex overflow-x-auto gap-3 py-4 scrollbar-hidden">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => setCategory(cat.value)}
          className={`px-5 py-2 rounded-full capitalize whitespace-nowrap transition ${
            category === cat.value
              ? "bg-blue-900 text-white"
              : "bg-gray-100 text-black hover:bg-gray-200"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryNav;