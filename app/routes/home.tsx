import { Outlet } from "@remix-run/react";
import { useContext } from "react";
import { HomeFooter } from "~/components/home/footer/homefooter";
import { MainNavBar } from "~/components/home/navbar/mainnavbar";
import { SideBar } from "~/components/home/sidebar/sidebar";
import { NavContext } from "~/contexts/navcontext";

const HomePage = () => {
    const nav = useContext(NavContext);
    return (
        <>
            <div className="flex md:relative">
                <SideBar></SideBar>
                <div className={`w-full md:grow  md:relative ${nav?.isNavOpen? "md:ml-60": "md:ml-20"}  p-2`}>
                    <MainNavBar></MainNavBar>
                    <Outlet />
                    <HomeFooter></HomeFooter>
                </div>

            </div>
        </>
    );
}

export default HomePage;


