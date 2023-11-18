import { Outlet } from "react-router-dom";

import Footer from "../../pages/Shared/Footer/Footer";
import Navbar from "../../pages/Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="overflow-x-hidden w-full">
      <Navbar>
        <main className="w-full">
          <Outlet></Outlet>
        </main>
      </Navbar>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
