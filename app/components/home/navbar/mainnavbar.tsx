import { NavLink } from "@remix-run/react";
import { LoginButton, NavLinks } from "./navbar";
import { faBell, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MainNavBar = () => {
    return (
        <>
            <div className="w-full grid place-items-center">
                <div className='bg-white w-full shadow-xl rounded-2xl '>
                    <div className="w-full  flex flex-col lg:flex-row px-2 items-center">
                        <div className='flex place-items-center rounded-xl items-end mr-6 w-60 '>
                            <NavLink to={"/"}>
                                <img src="/images/swrvlogo.png" className="w-32 lg:w-38 inline-block rounded-lg" />
                            </NavLink>
                            <p>Barnd</p>
                        </div>
                        <div className="grow"></div>
                        <MainNavRight></MainNavRight>
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