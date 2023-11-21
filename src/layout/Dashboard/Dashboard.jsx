import { Outlet } from "react-router-dom";
import UserSideNav from "./sideNav/UserSideNav";

const Dashboard = () => {
  return (
    <div className="overflow-x-hidden flex h-screen font-cinzel">
      <nav className="basis-1/5 bg-[#D1A054] p-6">
        <UserSideNav></UserSideNav>
      </nav>
      <main className="grow ">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Dashboard;
