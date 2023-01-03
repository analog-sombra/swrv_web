import { faDraft2digital } from "@fortawesome/free-brands-svg-icons";
import { IconDefinition, faChevronLeft, faChevronRight, faCircleQuestion, faEnvelope, faFolder, faHandHoldingDollar, faHeart, faPeopleLine, faPhone, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { NavContext } from "~/contexts/navcontext";

export const SideBar = () => {
    const nav = useContext(NavContext);


    return (
        <>
            <div className={` ${nav?.isNavOpen ? "w-60" : "w-20"} h-screen p-2 fixed top-0 left-0 md:block hidden`}>
                <div className="w-full h-full bg-primary rounded-2xl flex flex-col items-center py-8 px-3">
                    <div onClick={() => { nav?.setNavOpen(!nav.isNavOpen) }} className="w-full flex">
                        <div className="grow"></div>
                        <div className={`w-10 h-10 rounded-xl grid place-items-center text-white text-lg font-bold my-1 bg-[#053497] `}> <FontAwesomeIcon icon={nav?.isNavOpen ? faChevronLeft : faChevronRight}></FontAwesomeIcon> </div>
                    </div>
                    <NavTab title="My campaigns" isOpen={nav?.isNavOpen} isActive={true} icon={faFolder}></NavTab>
                    <NavTab title="Find campaigns" isOpen={nav?.isNavOpen} isActive={false} icon={faSearch}></NavTab>
                    <NavTab title="Inbox" isOpen={nav?.isNavOpen} isActive={false} icon={faEnvelope}></NavTab>
                    <NavTab title="My earnings" isOpen={nav?.isNavOpen} isActive={false} icon={faHandHoldingDollar}></NavTab>
                    <NavTab title="Drafts" isOpen={nav?.isNavOpen} isActive={false} icon={faDraft2digital}></NavTab>
                    <NavTab title="Favourite" isOpen={nav?.isNavOpen} isActive={false} icon={faHeart}></NavTab>
                    <NavTab title="Invite" isOpen={nav?.isNavOpen} isActive={false} icon={faPeopleLine}></NavTab>
                    <div className="grow"></div>
                    <NavTab title="Help" isOpen={nav?.isNavOpen} isActive={false} icon={faCircleQuestion}></NavTab>
                </div>
            </div>
        </>
    );
}


type NavTabProps = {
    icon: IconDefinition
    isActive: boolean
    isOpen: boolean
    title: string
    fun?: (e: Event) => void
}

const NavTab = (props: NavTabProps) => {
    return (
        <>
            <div className={`${props.isOpen ? "w-full" : "w-10"} h-10 rounded-xl ${props.isOpen ? "flex items-center " : "grid place-items-center"}  text-white text-lg font-bold my-1 ${props.isActive ? "bg-[#053497]" : ""} ${props.isOpen ? "px-4" : ""}`}> <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon> {props.isOpen ? <p className="ml-4 font-normal text-md">{props.title}</p> : null}  </div>
        </>
    );
}