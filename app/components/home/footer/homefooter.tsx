import { Link } from "@remix-run/react";

export const HomeFooter = () => {
    return (
        <>
            <div className="w-full flex py-6 px-8 flex-col md:flex-row">
                <Link to={"/"} className="text-sm text-gray-600 text-center px-4 font-normal">© 2020 SWRV Licensing AB - All rights reserved.</Link>
                <div className="grow"></div>
                <div className="flex justify-center my-2 md:my-0">
                    <Link to={"/"} className="text-sm text-gray-600 text-center px-4 font-normal">Terms of use</Link>
                    <Link to={"/"} className="text-sm text-gray-600 text-center px-4 font-normal">Privacy policy</Link>
                </div>


            </div>
        </>
    );
};