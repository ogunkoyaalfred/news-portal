import { useState } from "react";
import NewsCard from "./NewsCard";
import FeaturedCard from "./FeaturedCard";
import SkeletonCard from "./SkeletonCard";

const INITIAL_COUNT = 6;
const BATCH_SIZE = 9;

const LatestNews = ({ articles, loading }) => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  if (loading) {
    return (
      <div>
        <div className="mb-8 h-125 rounded-3xl bg-gray-200 animate-pulse" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    );
  }

  const [featured, ...rest] = articles;
  const visible = rest.slice(0, visibleCount);
  const hasMore = visibleCount < rest.length;

  return (
    <div>
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
            See More Stories
          </button>
        </div>
      )}
    </div>
  );
};

export default LatestNews;