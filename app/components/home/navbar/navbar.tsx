import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "@remix-run/react";
export const NavBar = () => {
    return (
        <>
            <div className="w-full grid place-items-center p-4">
                <div className='bg-white w-full shadow-xl rounded-xl '>

                    <div className="w-full  flex flex-col lg:flex-row px-4 md:px-16 items-center">
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
            </div>
        </>
    );
};

export const NavLinks = () => {
    return (
        <>
            <div className="grid place-items-center">
                <div className={`flex text-primary font-semibold text-sm`}>
                    <NavLink to="/" className={"px-2"}>What you get</NavLink>
                    <NavLink to="/" className={"px-2"}>How it's work</NavLink>
                    <NavLink to="/about" className={"px-2"}>About</NavLink>
                    <NavLink to="/contact" className={"px-2"}>Contact</NavLink>
                    <NavLink to="/blogs" className={"px-2"}>Blogs</NavLink>
                </div>
            </div>
        </>
    );
}

export const LoginButton = () => {
    return (
        <div className="grid place-items-center py-4 lg:p-0 w-full lg:w-60">
            <NavLink to={"/login"}>
                <div className={`text-black text-md font-normar cursor-pointer`}>
                    <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon> Login
                </div>
            </NavLink>
        </div>
    );
}