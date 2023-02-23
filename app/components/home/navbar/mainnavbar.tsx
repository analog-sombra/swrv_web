import { Link, NavLink } from "@remix-run/react";
import { faBars, faBell, faCircleQuestion, faEnvelope, faFolder, faHandHoldingDollar, faHeart, faPeopleLine, faRemove, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDraft2digital } from "@fortawesome/free-brands-svg-icons";
import { NavTab } from "../sidebar/sidebar";
import MobileNavStore from "~/state/home/mobilenavstate";
import Notification from "../notification";
import NotificationStore from "~/state/home/notification";
import SideBarNavStore, { SideBarTabs } from "~/state/navigation/sidebar";

type MainNavBarProps = {
    name: string
    avatar: string
    role: string
    isBrand: boolean
}

export const MainNavBar = (props: MainNavBarProps) => {
    const currentPage = SideBarNavStore((state) => state.currentIndex);
    const sidebar = SideBarNavStore((state) => state.changeTab);
    const isOpen = MobileNavStore((state) => state.isOpen);
    const changMenu = MobileNavStore((state) => state.change);

    return (
        <>
            <div className="w-full grid place-items-center">
                <div className='bg-white w-full shadow-xl rounded-2xl '>
                    <div className="w-full  flex px-4 items-center py-2">
                        <div className="mr-4 md:hidden cursor-pointer" onClick={() => { changMenu(!isOpen) }}>
                            <FontAwesomeIcon className="text-lg text-primary text-center font-bold" icon={isOpen ? faRemove : faBars}></FontAwesomeIcon>
                        </div>
                        <div className='flex place-items-center rounded-xl items-end mr-6 w-60 '>
                            <NavLink to={"/"}>
                                <img src="/images/swrvlogo.png" className="w-28 inline-block rounded-lg" />
                            </NavLink>
                            <p className="text-primary text-xs font-normal">{props.role[0].toUpperCase() + props.role.slice(1).toLowerCase()}</p>
                        </div>
                        <div className="grow"></div>
                        <MainNavRight avatar={props.avatar} role={props.role} name={props.name}></MainNavRight>
                    </div>
                    {/* //mobie nav */}
                    <div className={`w-full p-2 transition-all md:hidden ${isOpen ? "" : "hidden"} `}>
                        <div className="w-full h-full bg-primary rounded-2xl flex flex-col items-center  py-8 px-3">
                            <Link to={"/home/mycampaings"} onClick={() => { sidebar(SideBarTabs.MyCampaigns); changMenu(false) }}>
                                <NavTab title="My campaigns" isOpen={true} isActive={currentPage == SideBarTabs.MyCampaigns} icon={faFolder}></NavTab>
                            </Link>
                            <Link to={"/home/findcampaign"} onClick={() => { sidebar(SideBarTabs.FindCampaigns); changMenu(false) }}>
                                <NavTab title="Find campaigns" isOpen={true} isActive={currentPage == SideBarTabs.FindCampaigns} icon={faSearch}></NavTab>
                            </Link>
                            <Link to={"/home/inbox"} onClick={() => { sidebar(SideBarTabs.Inbox); changMenu(false) }}>
                                <NavTab title="Inbox" isOpen={true} isActive={currentPage == SideBarTabs.Inbox} icon={faEnvelope}></NavTab>
                            </Link>
                            {props.isBrand ?
                                null :
                                <>
                                    <Link to={"/"} onClick={() => { sidebar(SideBarTabs.MyEarnings); changMenu(false) }}>
                                        <NavTab title="My earnings" isOpen={true} isActive={currentPage == SideBarTabs.MyEarnings} icon={faHandHoldingDollar}></NavTab>
                                    </Link>
                                    <Link to={"/"} onClick={() => { sidebar(SideBarTabs.Drafts); changMenu(false) }}>
                                        <NavTab title="Drafts" isOpen={true} isActive={currentPage == SideBarTabs.Drafts} icon={faDraft2digital}></NavTab>
                                    </Link>
                                    <Link to={"/home/favourite"} onClick={() => { sidebar(SideBarTabs.Favourite); changMenu(false) }}>
                                        <NavTab title="Favourite" isOpen={true} isActive={currentPage == SideBarTabs.Favourite} icon={faHeart}></NavTab>
                                    </Link>
                                </>
                            }
                            <Link to={"/home/invite"} onClick={() => { sidebar(SideBarTabs.Invite); changMenu(false) }}>
                                <NavTab title="Invite" isOpen={true} isActive={currentPage == SideBarTabs.Invite} icon={faPeopleLine}></NavTab>
                            </Link>
                            <Link to={"/"} onClick={() => { sidebar(SideBarTabs.Help); changMenu(false) }}>
                                <NavTab title="Help" isOpen={true} isActive={currentPage == SideBarTabs.Help} icon={faCircleQuestion}></NavTab>
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

type MainNavRightProps = {
    name: string,
    avatar: string,
    role: string
}

const MainNavRight = (props: MainNavRightProps) => {
    const open = NotificationStore(state => state.isOpen);
    const changeNotification = NotificationStore(state => state.change);

    const role = props.role == "BRAND" ? "Admin" : "";
    const name = props.name.split("@")[0];
    const avatar = props.avatar == "0" || props.avatar == null || props.avatar == undefined || props.avatar == "" ? "/images/avatar/user.png" : props.avatar;
    return (
        <>
            <div className="md:flex hidden">
                <div className="grid place-items-center relative">
                    <div onClick={() => changeNotification(!open)}>
                        <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
                    </div>
                    <Notification></Notification>
                </div>
                <div className="h-8 mx-4 bg-primary w-[2px]"> </div>
                <div className="">
                    <p className="text-left text-md text-black font-normal">{name}</p>
                    <p className="text-left text-xs text-black font-normal">{role}</p>
                </div>
                <div className="mx-2">
                    <img src={avatar} alt="user avatar" className="w-10 h-10 rounded object-cover" />
                </div>
            </div>
        </>
    );
}