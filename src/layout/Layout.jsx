import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import "./Layout.css";
import Header from "../components/Header/Header";
import Headers from "../components/Header/Headers";

const Layout = () => {
  return (
    <div className="flex flex-col justify-between h-[100vh]">
      <header>
        {<Headers/>}
        {/* <Header /> */}
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
