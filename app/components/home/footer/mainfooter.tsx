import { Link } from "@remix-run/react";

export const MainFooter = () => {
    return (
        <>
            <div className="w-full flex py-6 px-8">
                <div className="grow"></div>
                <div>
                    <Link to={"/about"} className="text-sm text-gray-600 text-center px-4 font-normal">About</Link>
                    <Link to={"/"} className="text-sm text-gray-600 text-center px-4 font-normal">Terms of use</Link>
                    <Link to={"/"} className="text-sm text-gray-600 text-center px-4 font-normal">Privacy policy</Link>
                    <Link to={"/"} className="text-sm text-gray-600 text-center px-4 font-normal">Cookie policy</Link>
                    <Link to={"/"} className="text-sm text-gray-600 text-center px-4 font-normal">FAQ</Link>
                </div>


            </div>
        </>
    );
};