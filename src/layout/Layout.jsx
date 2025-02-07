import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import "./Layout.css";
import Header from "../components/Header/Header";
import Header from "../components/Header/Header";

const Layout = () => {
  return (
    <div>
      <header>
      <Header/>
      </header>
      <main className="absolute top-0 left-0 w-full">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
