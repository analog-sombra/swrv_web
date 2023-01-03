import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "@remix-run/react";
import { LoginButton, NavLinks } from './navbar';
export const IntroNavBar = () => {
    return (
        <>
            <div className="w-full grid place-items-center px-6 sm:px-16">
                <div className="w-full md:w-3/5 lg:w-4/6 flex flex-col lg:flex-row  ">
                    <div className='grid place-items-center'>
                        <NavLink to={"/"}>
                            <img src="./images/swrvlogo.png" className="w-32 lg:w-38" />
                        </NavLink>
                    </div>
                    <NavLinks></NavLinks>
                    <div className="hidden lg:block  lg:grow"></div>
                    <LoginButton></LoginButton>
                </div>
            </div>
        </>
    );
};