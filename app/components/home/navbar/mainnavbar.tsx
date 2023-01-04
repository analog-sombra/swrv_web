import { Link, NavLink } from "@remix-run/react";
import { faBars, faBell, faCircleQuestion, faEnvelope, faFolder, faHandHoldingDollar, faHeart, faPeopleLine, faRemove, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDraft2digital } from "@fortawesome/free-brands-svg-icons";
import { NavTab } from "../sidebar/sidebar";
import MobileNavStore from "~/state/home/mobilenavstate";
export const MainNavBar = () => {
    const isOpen = MobileNavStore((state) => state.isOpen);
    const changMenu = MobileNavStore((state) => state.change);
    const closeMenu = () => {
        changMenu(false);
    }

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
                            <p>Barnd</p>
                        </div>
                        <div className="grow"></div>
                        <MainNavRight></MainNavRight>
                    </div>
                    {/* //mobie nav */}
                    <div className={`w-full p-2 md:hidden ${isOpen ? "" : "hidden"} `}>
                        <div className="w-full h-full bg-primary rounded-2xl flex flex-col items-center  py-8 px-3">
                            <Link to={"/"} onClick={closeMenu}>
                                <NavTab title="My campaigns" isOpen={true} isActive={true} icon={faFolder}></NavTab>
                            </Link>
                            <Link to={"./findcampaign"} onClick={closeMenu}>
                                <NavTab title="Find campaigns" isOpen={true} isActive={false} icon={faSearch}></NavTab>
                            </Link>
                            <Link to={"/"} onClick={closeMenu}>
                                <NavTab title="Inbox" isOpen={true} isActive={false} icon={faEnvelope}></NavTab>
                            </Link>
                            <Link to={"/"} onClick={closeMenu}>
                                <NavTab title="My earnings" isOpen={true} isActive={false} icon={faHandHoldingDollar}></NavTab>
                            </Link>
                            <Link to={"/"} onClick={closeMenu}>
                                <NavTab title="Drafts" isOpen={true} isActive={false} icon={faDraft2digital}></NavTab>
                            </Link>
                            <Link to={"/"} onClick={closeMenu}>
                                <NavTab title="Favourite" isOpen={true} isActive={false} icon={faHeart}></NavTab>
                            </Link>
                            <Link to={"/"} onClick={closeMenu}>
                                <NavTab title="Invite" isOpen={true} isActive={false} icon={faPeopleLine}></NavTab>
                            </Link>
                            <Link to={"/"} onClick={closeMenu}>
                                <NavTab title="Help" isOpen={true} isActive={false} icon={faCircleQuestion}></NavTab>
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

const MainNavRight = () => {
    return (
        <>
            <div className="md:flex hidden">
                <div className="grid place-items-center">
                    <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
                </div>
                <div className="h-8 mx-4 bg-primary w-[2px]"> </div>

                <div className="grid place-items-center">
                    <p className="text-center text-xs text-black font-normal">ivankbfc@gmail.com</p>
                </div>
                <div className="mx-2">
                    <img src="/images/inf/inf6.png" alt="error" className="w-10 h-10 rounded object-cover" />
                </div>


            </div>
        </>
    );
}