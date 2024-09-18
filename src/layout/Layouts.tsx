import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      {/* Navbar */}
      <header className="w-full">
        <Navbar />
      </header>

      {/* Main content area */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
