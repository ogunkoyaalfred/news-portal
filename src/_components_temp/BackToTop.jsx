import { useState, useEffect } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-5 z-50 bg-blue-900 text-white
        rounded-full w-13 text-2xl h-13 flex items-center justify-center
        shadow-2xl hover:bg-blue-800 transition-all"
    >
      ↑
    </button>
  );
};

export default BackToTop;