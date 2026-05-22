const HeroSection = ({ article }) => {
  if (!article) return null;

  const truncateText = (text, limit = 140) => {
    if (!text) return "";
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };

  return (
    <section className="relative rounded-3xl overflow-hidden h-[500px]">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/90 to-black/20" />

      <div className="absolute bottom-0 p-8 text-white max-w-3xl">
        <span className="px-3 py-1 rounded-full text-sm text-red-400">
          Breaking
        </span>

        <h1 className="text-xl md:text-3xl font-black mt-4 leading-tight">
          {article.title}
        </h1>

        <p className="mt-4 text-sm md:text-base text-gray-200">
          {truncateText(article.description, 140)}
        </p>

        <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 shadow-md shadow-blue-700/60 rounded-full transition">
          Read More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;