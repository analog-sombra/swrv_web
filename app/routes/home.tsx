import { Outlet } from "@remix-run/react";
import { useContext } from "react";
import { HomeFooter } from "~/components/home/footer/homefooter";
import { MainNavBar } from "~/components/home/navbar/mainnavbar";
import { SideBar } from "~/components/home/sidebar/sidebar";
import SideBarStore from "~/state/home/sidebarstate";

const HomePage = () => {
    const isOpen = SideBarStore((state) => state.isOpen);
    return (
        <>
            <div className="flex md:relative bg-background">
                <SideBar></SideBar>
                <div className={`w-full md:grow  md:relative ${isOpen ? "md:ml-60" : "md:ml-20"}  p-2`}>
                    <MainNavBar></MainNavBar>
                    <Outlet />
                    <HomeFooter></HomeFooter>
                </div>
            </div>
        </>
    );
}

export default HomePage;


