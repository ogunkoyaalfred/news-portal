import NewsCard from "./NewsCard";
import FeaturedCard from "./FeaturedCard";

const CategorySection = ({ title, articles }) => {
  if (!articles || articles.length === 0) return null;

  const [featured, ...rest] = articles;
  const limited = rest.slice(0, 8);

  return (
    <section className="mt-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-black text-blue-900">{`${title} News`}</h2>
      </div>

      <div className="mb-8">
        <FeaturedCard article={featured} />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {limited.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;