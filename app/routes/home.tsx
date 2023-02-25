import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { useContext } from "react";
import { HomeFooter } from "~/components/home/footer/homefooter";
import { MainNavBar } from "~/components/home/navbar/mainnavbar";
import { SideBar } from "~/components/home/sidebar/sidebar";
import { userPrefs } from "~/cookies";
import SideBarStore from "~/state/home/sidebarstate";

export const loader: LoaderFunction = async (props: LoaderArgs) => {
    const cookieHeader = props.request.headers.get("Cookie");
    const cookie = await userPrefs.parse(cookieHeader);
    return json({ user: cookie.user });
}


const HomePage = () => {
    const userdata = useLoaderData();
    const isbrand = userdata.user.role.code != 10;
    const isOpen = SideBarStore((state) => state.isOpen);

    return (
        <>
            <div className="flex md:relative bg-background">
                <SideBar isBrand={isbrand} ></SideBar>
                <div className={`w-full md:grow transition-all  md:relative ${isOpen ? "md:ml-60" : "md:ml-20"}  p-2 pr-4`}>
                    <MainNavBar isBrand={isbrand} name={userdata.user.userName} role={userdata.user.role.name} avatar={userdata.user.pic}></MainNavBar>
                    <Outlet />
                    <HomeFooter></HomeFooter>
                </div>
            </div>
        </>
    );
}
export default HomePage;


