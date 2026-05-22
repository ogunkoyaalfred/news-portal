import { Flame } from "lucide-react";

const TrendingSidebar = ({ articles }) => {
return (
    <div className="bg-white rounded-3xl p-5 shadow-sm">
      <div className="text-blue-900 flex items-center gap-2 mb-6">
        <Flame />
        <h2 className="text-2xl font-black">Trending News</h2>
      </div>

      <div className="space-y-5 max-h-full lg:max-h-[30rem] overflow-scroll scrollbar-none">
        {articles.map((article, index) => (
          <div key={index} className="flex gap-4 group cursor-pointer bg-black/3 overflow-hidden">
            <img
              src={article.urlToImage}
              alt={article.title}
              className="w-24 h-24 object-cover group-hover:scale-105 transition-transform duration-250"
            />

            <div>
              <span className="text-xs text-red-400 uppercase">Trending</span>

              <h3 className="font-semibold group-hover:text-black/60 transition line-clamp-2 text-black">
                {article.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingSidebar;
