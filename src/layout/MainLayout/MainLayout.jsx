import { Outlet } from "react-router-dom";
import Nav from "../../pages/Shared/Navbar/Navbar";
import Footer from "../../pages/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="overflow-x-hidden">
      <Nav></Nav>
      <main className="min-h-[calc(100vh-560px)]">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
