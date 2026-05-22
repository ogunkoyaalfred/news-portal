import { Menu, Search } from "lucide-react";
import { format } from "date-fns";

const Navbar = () => {
  return (
    <header className="z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex gap-14 md:flex-row items-center md:gap-96">
        <span className="text-sm">
          {format(new Date(), "EEEE, do MMMM yyyy")}
        </span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900 tracking-tight font-['Space_Grotesk']">
          NEWSWIRE
        </h1>
      </nav>
    </header>
  );
};

export default Navbar;
