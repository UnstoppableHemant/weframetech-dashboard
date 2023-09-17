"use client";

import SideNav from "@/components/common/SideNav";
import Header from "@/components/common/Header";
import DashboardData from "@/components/HomePage/DashboardData";
import DashTasks from "@/components/HomePage/DashTasks";

export default function Home() {
  // const [showHideNav, setShowHideNav] = useState(false);
  // const toggleSideNav = () => {
  //   setShowHideNav(!showHideNav);
  // }
  return (
    <div>
      <div className="flex">
        <SideNav />
        <div className="xl:w-4/5 w-full h-full">
          <Header />
          <div className="px-8 py-6 bg-[#0D0B21] w-full">
            <DashTasks />
            <DashboardData />
          </div>
        </div>
      </div>
    </div>
  )
}