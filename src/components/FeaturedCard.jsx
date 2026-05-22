// components/FeaturedCard.jsx
const truncateText = (text, limit = 140) => {
  if (!text) return "";
  return text.length > limit ? text.slice(0, limit) + "..." : text;
};

const FeaturedCard = ({ article }) => {
  if (!article) return null;

  return (
    <article className="relative rounded-3xl overflow-hidden h-125 group">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/90 to-black/20" />

      {/* Source badge */}
      <div className="absolute top-4 left-4">
        <span className="rounded-full bg-blue-600/95 shadow-md shadow-blue-700/60 backdrop-blur-md px-4 py-2 text-xs font-bold uppercase tracking-wide text-white">
          {article.source.name}
        </span>
      </div>

      <div className="absolute bottom-0 p-8 text-white max-w-3xl">
        <span className="px-3 py-1 rounded-full text-sm text-red-400">
          Breaking
        </span>

        <h2 className="text-xl md:text-3xl font-black mt-4 leading-tight">
          {article.title}
        </h2>

        <p className="mt-4 text-sm md:text-base text-gray-200">
          {truncateText(article.description, 140)}
        </p>
        <a
          href={article.url}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 shadow-md shadow-blue-700/60 rounded-full transition text-sm font-semibold"
        >
          Read More
        </a>
      </div>
    </article>
  );
};

export default FeaturedCard;