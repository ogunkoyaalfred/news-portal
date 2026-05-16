import { formatDistanceToNow } from "date-fns";
import { Clock3, ArrowUpRight } from "lucide-react";

const NewsCard = ({ article, featured }) => {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-4xl
        border
        border-gray-100
        bg-white
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-300
      "
    >
      <div className="relative overflow-hidden">
        <img
          src={article.urlToImage}
          alt={article.title}
          loading="lazy"
          className={`
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
            ${featured ? "h-full w-1/2" : "h-64 w-full"}
          `}
        />

        <div />

        <div className="absolute top-4 left-4">
          <span
            className="
              rounded-full
              bg-blue-600/95
              shadow-md 
              shadow-blue-700/60
              backdrop-blur-md
              px-4
              py-2
              text-xs
              font-bold
              uppercase
              tracking-wide
              text-white
              shadow-lg
            "
          >
            {article.source.name}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Clock3 size={15} />

            <span>
              {formatDistanceToNow(new Date(article.publishedAt), {
                addSuffix: true,
              })}
            </span>
          </div>

          <span className="text-xs font-medium uppercase tracking-wide text-red-400">
            Trending
          </span>
        </div>

        <h2
          className={`
            mt-4
            font-black
            tracking-tight
            text-gray-900
            leading-tight
            line-clamp-2
            transition-colors
            duration-300
            group-hover:text-black/60
            ${featured ? "text-3xl" : "text-xl"}
          `}
        >
          {article.title}
        </h2>

        <p
          className="
            mt-4
            text-gray-600
            leading-7
            line-clamp-3
            text-[15px]
          "
        >
          {article.description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <a
            href={article.url}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-blue-50
              px-5
              py-3
              text-sm
              font-semibold
              text-blue-700
              transition-all
              duration-300
              hover:bg-blue-600
              hover:text-white
            "
          >
            Read Full Story
            <ArrowUpRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </a>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
