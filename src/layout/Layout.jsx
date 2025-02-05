import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import "./Layout.css";

const Layout = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
