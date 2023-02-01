import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "@remix-run/react";
import IntroNavStore from '~/state/home/intronavstate';
export const NavBar = () => {
    return (
        <>
            <div className="w-full grid place-items-center p-4">
                <div className="w-full  flex flex-col lg:flex-row px-4 md:px-16 items-center shadow-xl rounded-xl bg-white py-2">
                    <div className='flex place-items-center rounded-xl items-end mr-6 w-60 '>
                        <NavLink to={"/"}>
                            <img src="/images/swrvlogo.png" className="w-32 lg:w-38 inline-block" />
                        </NavLink>
                        <p>Barnd</p>
                    </div>
                    <div className="hidden lg:block  lg:grow"></div>
                    <NavLinks></NavLinks>
                    <div className="hidden lg:block  lg:grow"></div>
                    <LoginButton></LoginButton>
                </div>
            </div>
        </>
    );
};

export const NavLinks = () => {
    const changMenu = IntroNavStore((state) => state.change);
    const closeMenu = () => {
        changMenu(false);
    }
    return (
        <>
            <div className="grid place-items-center my-4 md:my-0">
                <div className={`flex flex-col items-center gap-y-4 md:flex-row text-primary font-semibold text-sm`}>
                    <NavLink onClick={() => closeMenu} to="/" className={"px-2"}>What you get</NavLink>
                    <NavLink onClick={() => closeMenu} to="/" className={"px-2"}>How it works</NavLink>
                    <NavLink onClick={() => closeMenu} to="/about" className={"px-2"}>About</NavLink>
                    <NavLink onClick={() => closeMenu} to="/contact" className={"px-2"}>Contact</NavLink>
                    <NavLink onClick={() => closeMenu} to="/blogs" className={"px-2"}>Blogs</NavLink>
                </div>
            </div>
        </>
    );
}

export const LoginButton = () => {
    return (
        <div className="grid place-items-center py-4 lg:p-0">
            <NavLink to={"/login"}>
                <div className={`text-black text-md font-normar cursor-pointer`}>
                    <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon> Login
                </div>
            </NavLink>
        </div>
    );
}