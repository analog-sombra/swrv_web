import { faAdd, faCaretDown, faCheck, faPaperclip, faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "@remix-run/react";
import { useState } from "react";
import ReactSwitch from "react-switch";
import { CusButton } from "~/components/utils/buttont";

const Step6 = () => {
    const navigator = useNavigate();
    const [active, setActive] = useState(false);

    return (
        <>
            <div className="flex gap-x-4 flex-col lg:flex-row">
                <div className="bg-white shadow-xl rounded-xl px-8 py-4 mt-4">
                    <div className="flex items-end gap-x-3">
                        <div>
                            <img src="/images/brand/adidas.jpg" alt="error" className="object-cover w-16 h-16 rounded" />
                        </div>

                    </div>

                    <h3 className="text-black font-bold text-md text-left mt-4">Info</h3>
                    <p className="text-black font-semibold text-xs text-left">
                        The Jaquar Group, established in 1960, is a growing multi-diversified bathroom and lighting solutions company with 17% CAGR over 10 years in a row, offers faucets, showers, shower enclosures, sanitary ware, flushing systems, wellness products, concealed cisterns, water heaters, and varied lighting products.
                    </p>
                    <h3 className="text-black font-bold text-md text-left mt-4">campaign Information</h3>
                    <p className="text-black font-semibold text-xs text-left">
                        The Jaquar Group, established in 1960, is a growing multi-diversified bathroom and lighting solutions company with 17% CAGR over 10 years in a row, offers faucets, showers, shower enclosures, sanitary ware, flushing systems, wellness products, concealed cisterns, water heaters, and varied lighting products.
                    </p>
                    <h3 className="text-black font-bold text-md text-left mt-4">Mood boards</h3>
                    <div className="flex gap-x-4">
                        <div className="w-24 h-24 bg-gray-200 rounded-xl"></div>
                        <div className="w-24 h-24 bg-gray-200 rounded-xl"></div>
                        <div className="w-24 h-24 bg-gray-200 rounded-xl"></div>
                    </div>
                    <h2 className="text-primary tect-xl font-medium text-left my-1">Optional attachments</h2>
                    <div className="bg-[#EEEEEE] w-full h-10 rounded-lg flex">
                        <div className="grow"></div>
                        <div className="grid place-items-center px-4 bg-gray-300 rounded-lg">
                            <FontAwesomeIcon icon={faPaperclip}></FontAwesomeIcon>
                        </div>
                    </div>
                    <h2 className="text-primary tect-xl font-medium text-left my-1">You should</h2>
                    <div className="bg-[#EEEEEE] w-full h-10 rounded-lg flex">
                        <div className="grid place-items-center px-4 rounded-lg font-bold text-green-500">
                            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                        </div>
                        <div className="grid place-items-center">
                            <h2 className="text-primary text-lg text-left font-medium">Do</h2>
                        </div>
                        <div className="grow"></div>
                        <div className="grid place-items-center px-4 bg-gray-300 rounded-lg">
                            <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className="h-10"></div>
                    <div className="bg-[#EEEEEE] w-full h-10 rounded-lg flex">
                        <div className="grid place-items-center px-4 rounded-lg font-bold text-red-500">
                            <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon>
                        </div>
                        <div className="grid place-items-center">
                            <h2 className="text-primary text-lg text-left font-medium">Don't</h2>
                        </div>
                        <div className="grow"></div>
                        <div className="grid place-items-center px-4 bg-gray-300 rounded-lg">
                            <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
                        </div>
                    </div>



                </div>
                <div>
                    <div className="lg:w-80 bg-white  shadow-lx rounded-xl p-4 mt-4">
                        <h1 className="text-primary text-lg font-medium">Campaign Summary</h1>
                        <h3 className="text-black font-bold text-md text-left mt-4">Congratulations</h3>
                        <p className="text-black font-semibold text-xs text-left">
                            The Jaquar Group, established in 1960, is a growing multi-diversified bathroom and lighting solutions company with 17% CAGR over 10 years in a row, offers faucets, showers, shower enclosures, sanitary ware, flushing systems, wellness products, concealed cisterns, water heaters, and varied lighting products.
                        </p>

                        <div className="flex w-full mt-10">
                            <div onClick={() => { navigator(-1) }} className="w-full">
                                <CusButton text="Back" textColor={"text-black"} background="bg-gray-100" width={"w-full"} fontwidth={"font-bold"}></CusButton>
                            </div>
                            <div className="w-10"></div>
                            <Link to={"/home"} className="w-full">
                                <CusButton text="Create" textColor={"text-white"} background="bg-secondary" width={"w-full"} fontwidth={"font-bold"}></CusButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Step6;