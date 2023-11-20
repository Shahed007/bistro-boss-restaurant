import { Outlet } from "react-router-dom";
import SideNav from "./sideNav/SideNav";

const Dashboard = () => {
  return (
    <div className="overflow-x-hidden flex h-screen">
      <nav className="basis-1/5 bg-[#D1A054] p-6">
        <SideNav></SideNav>
      </nav>
      <main className="grow ">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Dashboard;
