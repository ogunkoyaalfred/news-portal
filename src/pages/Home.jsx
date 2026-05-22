import { useContext, useState } from "react";
import { NewsContext } from "../context/NewsContext";

import BreakingTicker from "../components/BreakingTicker.jsx";
import HeroSection from "../components/HeroSection.jsx";
import CategoryNav from "../components/CategoryNav.jsx";
import CategorySection from "../components/CategorySection.jsx";
import SearchBar from "../components/SearchBar.jsx";
import TrendingSidebar from "../components/TrendingSidebar.jsx";
import LatestNews from "../components/LatestNews.jsx";
import Footer from "../components/Footer.jsx";
import BackToTop from "../components/BackToTop.jsx";
import Navbar from "../components/Navbar.jsx";

const Home = () => {
  const {
    articles,
    trending,
    loading,
    entertainmentNews,
    healthNews,
    category,
    setCategory,
    searchQuery,
    setSearchQuery,
    error,
  } = useContext(NewsContext);

  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    setSearchQuery(inputValue);
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <BackToTop/>
      <BreakingTicker headlines={trending} />
      <Navbar />

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around">
        <CategoryNav active={category} setActive={setCategory} />

        <div className="my-6">
          <SearchBar
            value={inputValue}
            onChange={setInputValue}
            onSearch={handleSearch}
          />
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 pb-8">
        {error && (
          <div className="bg-red-100 text-red-600 p-4 rounded-xl my-6">
            {error}
          </div>
        )}
        {searchQuery && (
          <div className="mt-8 flex items-center gap-3">
            <h2 className="text-2xl font-black text-gray-800">
              Results for <span className="text-blue-600">"{searchQuery}"</span>
            </h2>
            <span className="text-sm text-gray-400 font-medium">
              {articles.length} {articles.length === 1 ? "story" : "stories"}{" "}
              found
            </span>
            <button
              onClick={() => {setSearchQuery(""), setInputValue("")}}
              className="ml-auto text-sm text-red-400 hover:text-red-600 font-semibold transition"
            >
              Cancel Search ✕
            </button>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <HeroSection article={articles[0]} />
          </div>

          <TrendingSidebar articles={trending} />
        </div>

        <section
          className="mt-16 border-y-4 border-y-blue-100 pb-30 pt-20"
          id="latest-news"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-black text-blue-900">
              Latest News{searchQuery ? ` on "${searchQuery}"` : ""}
            </h2>
          </div>

          <LatestNews articles={articles.slice(1)} loading={loading} />
        </section>

        <section className="border-b-4 border-b-blue-100 pb-30">
          <CategorySection title="Entertainment" articles={entertainmentNews} />
        </section>

        <section>
          <CategorySection title="Health" articles={healthNews} />
        </section>

        <section className="mt-20 bg-blue-400 text-white rounded-3xl p-10 text-center">
          <h2 className="text-4xl font-black">Subscribe to our Newsletter</h2>

          <p className="text-white mt-4">
            Stay updated with breaking news and top stories.
          </p>

          <div className="max-w-xl mx-auto mt-8 flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 rounded-xl placeholder:text-white/40 border border-white/40 focus:ring-2 focus:ring-white focus:outline-none"
            />

            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold">
              Subscribe
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
