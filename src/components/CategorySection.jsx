import { useState } from "react";
import NewsCard from "./NewsCard";
import FeaturedCard from "./FeaturedCard";

const INITIAL_COUNT = 9;
const BATCH_SIZE = 9;

const CategorySection = ({ title, articles }) => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  if (!articles || articles.length === 0) return null;

  const [featured, ...rest] = articles;
  const visible = rest.slice(0, visibleCount);
  const hasMore = visibleCount < rest.length;

  return (
    <section className="mt-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-black text-blue-900">{`${title} News`}</h2>
      </div>

      <div className="mb-8">
        <FeaturedCard article={featured} />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + BATCH_SIZE)}
            className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-md shadow-blue-700/40 transition-all duration-300"
          >
            {`See More ${title} News`}
          </button>
        </div>
      )}
    </section>
  );
};

export default CategorySection;