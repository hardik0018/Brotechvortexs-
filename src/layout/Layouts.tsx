import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Mainlayout = () => {
  return (
    <div className="flex flex-col min-h-screen m-0">
      {/* Navbar */}
      <header>
        <Navbar />
      </header>
      {/* main screen */}
      <div className="flex-1">
        <Outlet />
      </div>

      {/* footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Mainlayout;
