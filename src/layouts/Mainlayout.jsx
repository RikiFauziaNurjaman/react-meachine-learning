import { Outlet } from "react-router";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

function Mainlayout() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>

      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Mainlayout;
