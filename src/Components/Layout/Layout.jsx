import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Layout = () => {
  const location = useLocation();
  const noHeaderFooter =
    // user Section -----------
    location.pathname.includes("under-construction") 

  return (
    <div>
      {noHeaderFooter || <Navbar />}
      <Outlet />
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Layout;
