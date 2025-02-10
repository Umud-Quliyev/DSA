import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import "./Layout.css";
import Header from "../components/Header/Header";

const Layout = () => {
  return (
    <div>
      <header>
      <Header/>
      </header>
      <main>
        <Outlet />
      </main>
      <footer >
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
